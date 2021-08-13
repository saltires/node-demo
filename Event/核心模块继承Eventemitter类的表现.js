const fs = require('fs')

const crt = fs.createReadStream()

const callback = () => {
  console.log(1)
}

crt.on('data', callback)

crt.once('data', callback)

crt.off('data', callback)