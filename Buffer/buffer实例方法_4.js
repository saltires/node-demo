/**
 * buffer 实例方法之 slice
 */

console.log('----------------start-------------------')
console.log('1 不传递任何参数，相当于复制一份buffer')
const buf1 = Buffer.from('维权骑士')
const copy1 = buf1.slice()
console.log(copy1, copy1.toString()) // <Buffer e7 bb b4 e6 9d 83 e9 aa 91 e5 a3 ab> 维权骑士
console.log('----------------end---------------------\n')

console.log('----------------start-------------------')
console.log('2 指定起始位置和结束位置')
const buf2 = Buffer.from('维权骑士')
const copy2 = buf2.slice(3, 9)
console.log(copy2, copy2.toString()) // <Buffer e6 9d 83 e9 aa 91> 权骑
console.log('----------------end---------------------\n')

