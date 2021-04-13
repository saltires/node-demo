const fsPromise = require('fs').promises
const path = require('path')

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

const isFile = async (input) => {
    const result = await exists(input)
    return result === 'file'
}

const isDirectory = async (input) => {
    const result = await exists(input)
    return result === 'dir'
}

const isEmpty = async (input) => {
    const entires = await fsPromise.readdir(input)
    return entires.length === 0
}

const mkdir = async (input) => {
    await fsPromise.mkdir(input, { recursive: true })
}

const remove = async (input) => {
    const result = await exists(input)

    if (result === false) return

    if (result !== 'dir') {
        return await fsPromise.unlink(input)
    }

    // 对目录做处理
    const entries = await fsPromise.readdir(input)
    

    await Promise.all(entries.map(async item => {
        await remove(path.join(input, item))
    }))

    await fsPromise.rmdir(input)
}

const read = async (input) => {
    return await fsPromise.readFile(input)
}

const write = async (input, content) => {
    const result = await exists(input)
    if (result === false) {
        await mkdir(path.dirname(input))
    }
    await fsPromise.writeFile(input, content)
}

module.exports = {
    exists,
    isFile,
    isDirectory,
    isEmpty,
    mkdir,
    remove,
    read,
    write
}