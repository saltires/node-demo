/**
 * buffer 实例方法之 fill
 */

console.log('----------------start-------------------')
console.log('1 使用fill填充数据')
const buf1 = Buffer.alloc(5)
buf1.fill('123')
console.log(buf1, buf1.toString()) // <Buffer 31 32 33 31 32> 12312
console.log('----------------end---------------------\n')



console.log('----------------start-------------------')
console.log('2 - 填充时指定起始位置')
const buf2 = Buffer.alloc(5)
buf2.fill('123', 1)
console.log(buf2, buf2.toString()) // <Buffer 00 31 32 33 31> 1231
console.log('----------------end---------------------\n')


console.log('----------------start-------------------')
console.log('3 - 填充时指定起始位置和结束位置(不包括)')
const buf3 = Buffer.alloc(5)
buf3.fill('123', 1, 3)
console.log(buf3, buf3.toString()) // <Buffer 00 31 32 00 00> 12
console.log('----------------end---------------------\n')