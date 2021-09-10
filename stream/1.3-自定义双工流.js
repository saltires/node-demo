const { Duplex } = require('stream')

class FooDuplex extends Duplex {
  constructor(source) {
    super()
    this.source = source
  }

  _read() {
    let data = this.source.shift() || null
    this.push(data)
  }

  _write(chunk, encoding, callback) {
    process.stdout.write(chunk.toString())
    callback()
  }
}

const foo = new FooDuplex(['1', '2', '3'])

// foo.on('data', (data) => {
//   console.log(data.toString())
// })

foo.write('hash')