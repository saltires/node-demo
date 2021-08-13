/**
 * buffer 实例方法之 write
 */

console.log('----------------start-------------------')
console.log('1 使用write填充数据')
const buf1 = Buffer.alloc(5)
buf1.write('1234567890')
console.log(buf1, buf1.toString()) // <Buffer 31 32 33 34 35> 12345
console.log('----------------end---------------------\n')



console.log('----------------start-------------------')
console.log('2 - 当填充数据长度小于buffer实例长度时')
const buf2 = Buffer.alloc(5)
buf2.write('123')
console.log(buf2, buf2.toString()) // <Buffer 31 32 33 00 00> 123
console.log('----------------end---------------------\n')


console.log('----------------start-------------------')
console.log('3 - 填充时指定起始位置和填充的长度')
const buf3 = Buffer.alloc(5)
buf3.write('123', 1, 3)
console.log(buf3, buf3.toString()) // <Buffer 00 31 32 33 00> 123
console.log('----------------end---------------------\n')