const {Transform} = require('stream')

class Foo extends Transform {
  constructor() {
    super()
  }

  _transform(chunk, encoding, callback) {
    this.push(chunk.toString().toUpperCase())
    callback(null)
  }
}

const foo = new Foo()

foo.write('hash')

foo.on('data', chunk => {
  console.log(chunk.toString())
})