/**
 * buffer 实例方法之 copy
 */

console.log('----------------start-------------------')
console.log('1 默认拷贝')
const buf1 = Buffer.from('维权骑士')
const buf1_wrap = Buffer.alloc(12)
buf1.copy(buf1_wrap)
console.log(buf1_wrap, buf1_wrap.toString()) //  <Buffer e7 bb b4 e6 9d 83 e9 aa 91 e5 a3 ab> 维权骑士
console.log('----------------end---------------------\n')

console.log('----------------start-------------------')
console.log('2 指定从容器的哪个位置开始写入')
const buf2 = Buffer.from('维权骑士')
const buf2_wrap = Buffer.alloc(12)
buf2.copy(buf2_wrap, 3)
console.log(buf2_wrap, buf2_wrap.toString()) //  <Buffer 00 00 00 e7 bb b4 e6 9d 83 e9 aa 91> 维权骑
console.log('----------------end---------------------\n')

console.log('----------------start-------------------')
console.log('3 指定从源数据读取的起始位置和结束位置')
const buf3 = Buffer.from('维权骑士')
const buf3_wrap = Buffer.alloc(12)
buf3.copy(buf3_wrap, undefined, 3, 9)
console.log(buf3_wrap, buf3_wrap.toString()) //  <Buffer e6 9d 83 e9 aa 91 00 00 00 00 00 00> 权骑
console.log('----------------end---------------------\n')

