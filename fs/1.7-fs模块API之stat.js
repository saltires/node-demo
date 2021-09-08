const fsPromise = require('fs/promises')

// 读取一个文件的属性(目录、文件、其他)
const exists = async (input) => {
  try {
      const stat = await fsPromise.stat(input)
      if (stat.isDirectory()) {
          return 'dir'
      } else if (stat.isFile()) {
          return 'file'
      } else {
          return 'other'
      }
  } catch (err) {
      if (err.code !== 'ENOENT') {
          throw err
      }
      return false
  }
}

(async () => {
  console.log(await exists('./file.js'))
})()

// file

(async () => {
  console.log(await exists('./'))
})()

// dir