const fs = require('fs')

const rs = fs.createReadStream('./test1.txt')
const ws = fs.createWriteStream('./test2.txt')
console.log(process.memoryUsage())
rs.pipe(ws)

console.log(process.memoryUsage())