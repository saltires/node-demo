var through2 = require('through2')
// const vfs = require('vinyl-fs');

// vfs.src(
//         [
//           './**/*.js',
//         ],
//         {
//           allowEmpty: true,
//         },
//       ).pipe(through2.obj(function(chunk, enc, callback) {
//         console.log("chunk.contents", chunk.contents)
//         console.log("chunk.cwd", chunk.cwd)
//         console.log("chunk.base", chunk.base)
//         console.log("chunk.path", chunk.path)
//       }))

var objectStream = through2.obj(function(chunk, encoding, callback) {
    chunk.timestamp = new Date()
    this.push(chunk)
    callback()
})

var jsonStream = through2.obj(function(chunk, encoding, callback) {
  this.push(JSON.stringify(chunk, null, 4) + '\n')
  callback()
})

objectStream.pipe(jsonStream)
  .pipe(process.stdout)

objectStream.write({ status: 404, message: 'Not found' })
objectStream.write({ status: 500, message: 'Internal server error'})

