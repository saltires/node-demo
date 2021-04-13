// 注意 new Buffer() API 已被弃用
// buffer 中的数据以 utf8 进制存储，无论何种类型编码的数据都会被转为 utf8 

// 这个文件演示了如何在 Nodejs 中创建一个缓冲区

// 1 使用 Buffer.from(string[,encoding])

// 1.1 不指定编码时，默认使用 utf8
var buf = Buffer.from('维权骑士')
var buf1 = Buffer.from('维权骑士', 'utf8')

// console.log(buf.toString())

// 1.2 指定字符串编码为 hex(十六进制)
var buf2 = Buffer.from(buf1.toString('hex'), 'hex')
// console.log(buf2);
// console.log('utf8:', buf2.toString('utf8'));

// 1.3 指定字符串编码为 base64(base64)
var buf3 = Buffer.from(buf1.toString('base64'), 'base64')
// console.log(buf3);
// console.log('utf8:', buf3.toString('utf8'));

// 2 Buffer.alloc(size[, fill[, encoding]])
// size <integer> 新 Buffer 的期望长度。
// fill <string> | <Buffer> | <Uint8Array> | <integer> 用于预填充新 Buffer 的值。默认值: 0。
// encoding <string> 如果 fill 是一个字符串，则这是它的字符编码。默认值: 'utf8'。
var buf = Buffer.alloc(5);
// console.log(buf) => <Buffer 00 00 00 00 00>
var buf = Buffer.alloc(5, 'a')
// console.log(buf); => <Buffer 61 61 61 61 61>
var buf = Buffer.alloc(5, 'a', 'utf8')
// console.log(buf); => <Buffer 61 61 61 61 61>
var buf = Buffer.alloc(15, 'aGVsbG8gd29ybGQ=', 'base64');
// console.log(buf.toString('utf8')) => hello worldhell

// 3 alloc 和 allocUnsafe 的区别
// 二者的区别在于 .alloc() 会对分配的空间进行填充，保证新分配的空间不会含有以前的数据。
// 而 .allocUnsafe() 不会填充，所以更快。但是如果 .allocUnsafe() 之后立即 .fill()，
// 其效果和 .alloc() 一样，但执行效率可能会略差(需要实测确定)。



