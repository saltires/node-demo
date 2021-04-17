const { pipeline } = require('stream')
const { resolve } = require('path')
const { createGzip } = require('zlib')
const { createReadStream, createWriteStream } = require('fs')
const input = process.argv[2]

function gzip(input) {
    const from = createReadStream(resolve(input))
    const to = createWriteStream(resolve(input + '.gzip'))
    const gzipAction = createGzip()
    pipeline(from, gzipAction, to, err => console.log(err))
}

gzip(input)