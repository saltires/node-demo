/**
 * buffer 实例方法之 indexOf
 */

console.log('----------------start-------------------')
console.log('1 在buffer实例中查找某个字符出现的位置')
const buf1 = Buffer.from('维权骑士')
console.log(buf1, buf1.indexOf('权')) //<Buffer e7 bb b4 e6 9d 83 e9 aa 91 e5 a3 ab> 3
console.log('----------------end---------------------\n')

