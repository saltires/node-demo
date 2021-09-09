/**
 * 使用 open read write 及 buffer 缓冲区实现大文件拷贝（拷贝时只会消耗很小的一部分内存）
 */
console.log(process.memoryUsage())
const fs = require('fs')
const path = require('path')

const buf = Buffer.alloc(10)
let readoffset = 0

fs.open(path.resolve(__dirname, 'test1.txt'), 'r', (err, rfd) => {
  fs.open(path.resolve(__dirname, 'test2.txt'), 'w', (err, wfd) => {
    function next() {
      console.log(process.memoryUsage())
      fs.read(rfd, buf, 0, 10, readoffset, (err, readBytes) => {
        // 读取完毕
        if (!readBytes) {
          fs.close(rfd, () => { })
          fs.close(wfd, () => { })
          return console.log('拷贝完成')
        }

        readoffset += readBytes

        fs.write(wfd, buf, 0, readBytes, () => {
          next()
        })
      })
    }
    next()
  })
})

console.log(module)