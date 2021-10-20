const through2 = require('through2')

/**
 * @desc: 默认情况下，stream只能操作Buffer和String，而through2模块的obj方法可以在流中操作对象数据
 * through2模块 和vinyl-fs的搭配使用需要掌握 ，参考 https://github.com/saltires/toolkit-js/blob/master/scripts/build.js
 * 而vinyl-fs 和 vinyl模块互相之间又强依赖
 */
const sourceStream = through2.obj(function (chunk, en, callback) {
  // 添加时间戳
  chunk.timestamp = new Date()
  this.push(chunk)
  callback()
})

const jsonStream = through2.obj(function (chunk, en, callback) {
  this.push(JSON.stringify(chunk, null, 4) + '\n')
  callback()
})

sourceStream.pipe(jsonStream).pipe(process.stdout)

sourceStream.write({ status: 404, message: 'Not found' })
sourceStream.write({ status: 500, message: 'Internal server error' })

