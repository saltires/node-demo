/**
 * 模式实现 Nodejs 中的 require 方法
 * ******
 * 核心逻辑：
 * 1、路径分析：确定目标模块的绝对路径
 * 2、缓存优化：使用缓存提高加载效率，也就是每次加载之前先去缓存中查找目标模块是否已经被加载，如果已加载，直接返回缓存对象中该模块的 exports 对象即可
 * 3、文件定位：确定目标模块的文件类型，例如是 js 还是 json，对于不同文件类型，调用不同的方法去执行编译
 * 4、编译执行：把目标模块中的内容变成可以在当前模块中使用的数据
 */

const fs = require('fs')
const path = require('path')
const vm = require('vm')

function Module(id) {
  this.id = id
  this.exports = {}
}

Module._resolveFilename = function(filename) {
  let absPath = path.resolve(__dirname, filename)
  
  // 判断当前路径对应的内容是否存在
  if (fs.existsSync(absPath)) {
    return absPath
  } else {
    // 文件定位，尝试补足后缀名（在Node中的require中的操作会比这里复杂的多）
    let suffix = Object.keys(Module._extensions)

    for (let i = 0; i < suffix.length; i++) {
      let newpath = absPath + suffix[i]
      console.log(newpath)
      
      if (fs.existsSync(newpath)) {
        return newpath
      } 
    }
  }

  throw new Error('无法找到目标模块')
}

Module._extensions = {
  '.js'(module) {
    // 读取目标模块内容
    let content = fs.readFileSync(module.id, 'utf-8')

    // 包装
    content = Module.wrapper[0] + content + Module.wrapper[1]

    // 使用 vm 执行
    let compileFn = vm.runInThisContext(content)
    
    // 准备参数值
    let exports = module.exports
    let dirname = path.dirname(module.id)
    let filename = module.id

    // 调用
    compileFn.call(exports, exports, myRequire, module, filename, dirname)
  },
  '.json'(module) {

  }
}

Module.wrapper = [
  "(function(exports, require, module, __filename, __dirname){",
  "})"
]

Module._cache = {}

Module.prototype.load = function() {
  let extname = path.extname(this.id)
  
  Module._extensions[extname](this)
}


function myRequire(filename) {
  // 1 获取绝对路径
  let absPath = Module._resolveFilename(filename)

  // 2 缓存优先
  let cacheModule = Module._cache[absPath]
  if (cacheModule) return cacheModule.exports

  // 3 创建空对象加载目标模块
  let module = new Module(absPath)

  // 4 缓存已加载模块
  Module._cache[absPath] = module

  // 5 执行模块
  module.load()

  // 6 返回数据
  return module.exports
}

let obj = myRequire('./test')

console.log('读取到的模块对象:', obj)