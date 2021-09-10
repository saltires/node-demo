const { Readable } = require('stream')

class FooReadable extends Readable {
  constructor(source) {
    super()
    this.source = source
  }
  _read() {
    let data = this.source.shift() || null
    this.push(data)
  }
}

const foo = new FooReadable(['1', '2', '3'])

foo.on('readable', () => {
  let data = foo.read()
  if (data) {
    console.log(data.toString())
  }
})