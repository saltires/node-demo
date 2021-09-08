const { copyFile } = require('fs')


console.log('----------------start-------------------')
console.log('1 复制文件')
copyFile('./test2.txt', './test3.txt', (err, data) => {
  console.log('data', err, data)
})
console.log('----------------end---------------------\n')
