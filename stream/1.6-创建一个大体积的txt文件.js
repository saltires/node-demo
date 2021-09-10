const fs = require('fs')

const wd = fs.createWriteStream('./test1.txt')

for (let i = 0; i < 1000000; i++) {
  wd.write('0123456789')
}