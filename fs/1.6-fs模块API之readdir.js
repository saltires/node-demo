const { readdir } = require('fs')

readdir('./xxxx', (curr, files) => {
  console.log(curr, files)
})

/**
 * [
  '1.1-fs模块API之readFile.js',
  '1.2-fs模块API之writeFile.js',
  '1.3-fs模块API之appendFile.js',
  '1.4-fs模块API之copyFile.js',
  '1.5-fs模块API之watchFile.js',
  '1.6-fs模块API之readdir.js',
  'complex.js',
  'file.js',
  'index.js',
  'message.txt',
  'mkdir.js',
  'process.js',
  'rmdir.js',
  'test.txt',
  'test1.txt',
  'test2.txt',
  'test3.txt',
  '测试目录'
]
 */