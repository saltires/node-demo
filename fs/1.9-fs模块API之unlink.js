const { unlink } = require('fs')

unlink('./test.txt', (err) => {
  console.log(err)
})