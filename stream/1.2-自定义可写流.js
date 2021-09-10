const { Writable } = require('stream')

class FooWritable extends Writable {
  constructor() {
    super()
  }

  _write(chunk, encoding, callback) {
    process.stdout.write(chunk.toString())
    callback()
  }
}

const foo = new FooWritable()

foo.write('hash')