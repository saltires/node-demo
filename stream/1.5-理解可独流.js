const fs = require('fs')

const rd = fs.createReadStream('test1.txt', {
  highWaterMark: 1000 * 1024
})

/**
 * 通过pause方法可以从流动模式切换为暂停模式，利用resume方法可以从暂停模式切换到流动模式
 */
// rd.on('data', chunk => {
//   console.log(chunk.toString())
//   rd.pause()

//   setTimeout(() => {
//     rd.resume()
//   }, 1000)
// })

rd.on('readable', () => {
  let data
  // while((data = rd.read(1)) != null) {
  //   console.log(data.toString())
  //   console.log('-------', rd._readableState.length)
  // }
  console.log(rd.read(1).toString())
  console.log('-------', rd._readableState.length)
})

/**
 * 
0
------- 19
1
------- 38

上面这个打印结果能表示暂停模式下读取缓存区里的数据，如果一次没读完，并且不再读取后，会导致缓存区空间不再溢满，可独流会再次读取一次数据，导致缓存区的大小大于 highWaterMark 指定的大小
所以缓存区的大小可以断定其范围在0-2*highWaterMark 之间，之所以由这样的结果，是因为当缓冲区大小不足一次highWaterMark时，可读流会触发一次read事件，读取一次highWaterMark大小的数据，
但是一旦当缓冲区大小大于一次highWaterMark大小时，也就不会在触发read方法了，所以从一开始的readable事件开始，缓冲区里存放了至多一次highWaterMark大小的数据，假设我们只读取了一个字节，
并且就不再读取了，那么可独流发现缓冲区大小小于一次highWaterMark大小时，就会触发一次read读取，并且大小是一次highWaterMark大小，而不是把缓冲区填满至一次highWaterMark大小，所以可以认为
可独流的缓冲区大小区间 0 <= buffSize < 2 * highWaterMark

因为默认情况下，fs的createReadStream方法创建的可独流其highWaterMark是16kb，所以默认情况下，其缓存区最多占据无限接近于32kb的空间
 */