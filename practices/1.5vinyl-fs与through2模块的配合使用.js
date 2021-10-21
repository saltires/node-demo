const vfs = require('vinyl-fs')
const through2 = require('through2')

/**
 * @description vinyl-fs 是gulp的强依赖包，甚至gulp被我们熟知的src dest等方法都是直接暴露的vinyl-fs的src和dest方法
 * 类似于 Gulp.prototype.src = vinylfs.src Gulp.prototype.dest = vinylfs.dest
 */
vfs.src(
  [
    './**/*.js',
  ],
  {
    allowEmpty: true,
  },
).pipe(through2.obj(function (chunk, enc, callback) {
  /**
   * @description 这里chunk对象是一个 vinyl 对象，详情参考 https://www.npmjs.com/package/vinyl
   * 之所以，chunk是一个vinyl对象，是因为 vinyl-fs 内部使用了 vinyl
   */
  console.log("chunk.contents", chunk.contents)
  console.log("chunk.cwd", chunk.cwd)
  console.log("chunk.base", chunk.base)
  console.log("chunk.path", chunk.path)
  callback(null, chunk)
}))