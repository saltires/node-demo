const { Transform } = require('stream')

class MyTransform extends Transform {
  _transform(chunk, encoding, callback) {
    this.push(chunk.toString().toUpperCase())
    callback()
  }
}

const myTransForm = new MyTransform()

process.stdin.pipe(myTransForm).pipe(process.stdout);