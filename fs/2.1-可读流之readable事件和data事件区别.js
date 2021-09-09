const fs = require('fs')

const stream = fs.createReadStream('./test1.txt', {
  highWaterMark: 2
})

let count = 0

stream.on('readable', () => {
  console.log('stream is readable!')
  let data

  if (count <= 2) {
    count+=1
    if ((data = stream.read()) != null) {
      console.log(data.toString())
    }
  }
})

// stream.on('data', (data) => {
//  console.log(data.toString())
// })