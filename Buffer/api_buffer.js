// 1 判断变量是否是 buffer
var buf = Buffer.from('hi')
console.log('------------------------------------------------- start')
console.log('1. 判断变量是否是 buffer')
console.log('1', Buffer.isBuffer(1))
console.log('true', Buffer.isBuffer(true))
console.log('[1,2]', Buffer.isBuffer([1,2]))
console.log(Buffer.from('hi'), Buffer.isBuffer(buf))
console.log('------------------------------------------------- end')

// 2. 使用 for of 循环迭代 buffer
console.log('------------------------------------------------- start')
console.log('2. 使用 for of 循环迭代 buffer')
var buf1 = Buffer.from([1, 2, 3]);
var buf2 = Buffer.from('abcd');

console.log('buf1', buf1)
console.log('buf2', buf2)

for (const b of buf1) {
  console.log('[1,2,3]', b);
}
for (const b of buf2) {
    console.log('abcd', b);
  }
console.log('------------------------------------------------- end')

// 3 对 buf 进行切片
console.log('------------------------------------------------- start')
console.log('3. 对 buf 进行切片')
var buf3 = Buffer.from('buffer');
var buf31 = buf3.slice(0, 1)
console.log('buf3', buf3)
console.log('buf31', buf31)
console.log('buf31 转为字符串', buf31.toString())
buf31[0]++
console.log('buf31', buf31)
console.log('buf31 转为字符串', buf31.toString())
console.log('buf3 转为字符串', buf3.toString())

// Note: 对 buffer 进行切片的方式除了 slice 还有 subarray（该方法和 slice 效果一致，切片出来的 buf 和父 buf 占据着相同的内存），
// 它是继承自 TypedArray 的一个方法

// 通过上面代码可以分析出，通过 buffer 实例的 slice 方法进行切片出来的 buf 和之前的 buf 占据着相同的内存，
// 因此修改了 buf31 后，buf3 也变化了

// ? 那如何进行彻底的复制呢

// 解决方法是通过 Uint8Array.prototype.slice.call()，如下：
var buf32 = Buffer.from('buffer');

const copiedBuf = Uint8Array.prototype.slice.call(buf32);
copiedBuf[0]++;
console.log('copiedBuf 转为字符串：', copiedBuf.toString());
// 打印: cuffer

console.log('buf32 转为字符串：', buf32.toString());
// 打印: buffer

console.log('------------------------------------------------- end')

// 4 将一个 buf 中的内容复制到另一个 buf 中
console.log('------------------------------------------------- start')
console.log('4. 将一个 buf 中的内容复制到另一个 buf 中')
var buf4 = Buffer.alloc(10, 'bufferrise')
var buf41 = Buffer.alloc(10, '!')

console.log('buf4', buf4)
console.log('buf4 转为字符串：', buf4.toString())
console.log('buf41', buf41)
console.log('buf41 转为字符串：', buf41.toString())
buf4.copy(buf41, 2, 3, 10)
console.log('将 buf4 部分内容复制到 buf41 后')
console.log('buf41', buf41)
console.log('buf41 转为字符串：', buf41.toString())
console.log('------------------------------------------------- end')