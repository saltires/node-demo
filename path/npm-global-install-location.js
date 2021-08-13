const path = require('path')

/**
 * 1、npm 全局安装包时，常常会有一个误解：将一个 npm 包全局安装后，是不是就可以在任意模块中使用 require 引用它呢？
 * 实际上，全局安装 npm 包，是将一个包安装为全局可用的可执行命令，例如，全局安装 Typescript 后，我们便可以在终端使用
 * tsc 命令对 ts 文件进行编译为 js 的操作。之所以全局安装后就有这样的效果，是因为 npm 会根据 package.json 中的 bin
 * 字段将你安装的 npm 中的实际可执行脚本连接到和 Node 可执行文件相同的路径下，对于 Typescript 来说，便存在这一个叫做 tsc
 * 的脚本被链接到和 Node 可执行文件相同的路径下
 */
const npmGlobalInstallLocation = path.resolve(process.execPath, '..', '..', 'lib', 'node_modules')

console.log(npmGlobalInstallLocation)