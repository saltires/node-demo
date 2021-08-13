/**
 * buffer 实例方法之 toString
 */

console.log('----------------start-------------------')
console.log('1 使用 toString 展示buffer内容')
const buf1 = Buffer.from('维权骑士')
console.log(buf1, buf1.toString()) // <Buffer e7 bb b4 e6 9d 83 e9 aa 91 e5 a3 ab> 维权骑士
console.log('----------------end---------------------\n')

console.log('----------------start-------------------')
console.log('2 指定起始位置和结束位置')
const buf2 = Buffer.from('维权骑士')
console.log(buf2, buf2.toString('utf-8', 3, 9) ) // <Buffer e7 bb b4 e6 9d 83 e9 aa 91 e5 a3 ab> 权骑
console.log('----------------end---------------------\n')

