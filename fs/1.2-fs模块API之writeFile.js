const { writeFile } = require('fs')


console.log('----------------start-------------------')
console.log('1 向一个原本不存在的文件写入内容')
writeFile('./test2.txt', '1234', (err, data) => {
  console.log('data', err, data)
})
console.log('----------------end---------------------\n')
