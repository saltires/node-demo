const fs = require('fs')

const rd = fs.createReadStream('./test1.txt')

const wd = fs.createWriteStream('./test2.txt')

rd.on('data', (data) => {
  wd.write(data)
})