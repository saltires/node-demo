const { readFile } = require('fs')


console.log('----------------start-------------------')
console.log('1 读取文件内容并指定编码格式')
/**
 * Note： 如果指定编码格式，readFile 回调函数中数据将是指定编码格式的文本内容
 */
readFile('./test.txt', 'utf8', (err, data) => {
  console.log('data', data)
})
console.log('----------------end---------------------\n')

console.log('----------------start-------------------')
console.log('2 仅仅读取文件内容')
/**
 * Note： 如果不指定编码格式，readFile 回调函数中数据将是buffer实例
 */
readFile('./test.txt', (err, data) => {
  console.log('data', data)
})
console.log('----------------end---------------------\n')