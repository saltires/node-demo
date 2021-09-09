const { mkdir } = require('fs')

// 创建 ./tmp/a/apple，不管 `/tmp` 和 /tmp/a 是否存在。
mkdir('./tmp/a/apple', { recursive: true }, (err) => {
  if (err) throw err
})