const fs = require('fs')

// 1. 正常删除目录，假设当前目录中存在 temp 文件夹
// fs.rmdir('./temp', err => console.log(err))

// 2. 删除一个不存在的目录，假设当前目录中不存在 temp 文件夹
// fs.rmdir('./temp', err => console.log(err)) // ENOENT

// 3. 删除一个文件而非目录时
// fs.rmdir('./message.txt', err => console.log(err)) // ENOTDIR

// 4. 删除一个非空的文件夹，报错
fs.rmdir('./测试目录', err => console.log(err)) // ENOTEMPTY