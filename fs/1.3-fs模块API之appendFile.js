const { appendFile } = require('fs')


console.log('----------------start-------------------')
console.log('1 向一个原本不存在的文件追加内容')
appendFile('./test2.txt', '1234', (err, data) => {
  console.log('data', err, data)
})
console.log('----------------end---------------------\n')
