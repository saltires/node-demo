// 这个 js 文件用于演示如何在 Nodejs 中获取 buffer 中的某个字节及修改 buffer 中的某个字节

// 1.1 创建一个 buffer
var buf = Buffer.from('abcd')
var buf1 = Buffer.from('aGVsbG8gd29ybGQ=', 'base64')
var buf2 = Buffer.from('hello world')
var buf3 = Buffer.from('维权')

// 1.2 读取 buffer 中的第一个字节
console.log(buf)
console.log(buf1)
console.log(buf2)
console.log(buf3)
// 使用 buf[index] 来读取 buffer 中存储的数据时，读取到的是 unicode10 进制的数据
// 例如 a 在 buffer 中存储是 61（a 的 utf8），但是使用 buf[index] 来进行读取时，得到的是 97（a 的 unicode10 进制）
console.log(buf[0])
console.log(buf1[0])
console.log(buf3[0])
for (var i = 0; i < buf3.length; i++) {
    console.log(buf3[i])
}

// e7 bb b4 e6 9d 83 是“维权”这两个字的 utf8 格式
// 现将 e7 bb b4 e6 9d 83 的十进制格式逐一赋值给 buffer 的每一个字节
// 最后调用这个 buffer 的 toString 方法将其还原为字符串
var foo = Buffer.alloc(6)
foo[0] = 231
foo[1] = 187
foo[2] = 180
foo[3] = 230
foo[4] = 157
foo[5] = 131
console.log(foo)
console.log(foo.toString())


// 2 将全是 ASCII 字符的字符串 str 转为 buffer 存储起来，并将 buffer 转为 utf8 还原 str
const str = 'http://nodejs.cn/';
const buf = Buffer.allocUnsafe(str.length);

for (let i = 0; i < str.length; i++) {
  buf[i] = str.charCodeAt(i);
}
console.log(buf)
console.log(str.charCodeAt(0))

console.log(buf.toString('utf8'));
