const fsPromise = require('fs').promises
const { exists, isFile, isDirectory, isEmpty, mkdir, remove, read, write } = require('./file.js')
// 1 创建文件夹 目录1/目录2 及文件 /目录1/目录2/foo.txt
const dest = './目录1/目录2/foo.txt'
const dir = '目录1/目录2/目录3'
const fileList = ['./目录1/目录2/目录3/test.txt', './目录1/目录2/目录3/test1.txt']

const init = async (dest) => {
    await write(dest, Buffer.from('初始化'))
}

// 2 创建文件夹 目录1/目录2/目录3
const touchDir = async (dir) => {
    await mkdir(dir)
}

// 3 批量创建文件 test.txt、test1.txt
const touchFile = async (fileList) => {
    await Promise.all(fileList.map(async item => {
        await write(item, Buffer.from('初始化内容'))
    }))
}

// 4 删除目录1 及其下面所有文件

(async () => {
    // await init(dest)
    // await touchDir(dir)
    // await touchFile(fileList)
    await remove('./目录1')
})()