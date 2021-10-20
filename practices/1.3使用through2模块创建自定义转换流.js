const through2 = require('through2')

/**
 * @description through2主要是基于streams2(2指的是API稳定性)封装的transform stream
 * 其目的便在于让使用Transform变得更为简单及兼容性更好，through2是对node.js原生stream.Transform进行的封装
 * 之所以说兼容性更好，是因为through2模块并没有使用nodejs原生的stream模块，而是使用的社区中一个模块 streams2
 * 其次，through2模块在社区中有很高的使用率，因为gulp使用了vinyl-fs,而vinyl-fs内部又使用了through2，
 * 几乎和vinyl-fs模块搭边的代码都有可能涉及到through2模块
 * 在through2模块的使用中，obj模式也必须掌握
 */
process.stdin.pipe(through2(function(chunk, enc, callback) {
  this.push(chunk.toString().toUpperCase())
  callback()
})).pipe(process.stdout)