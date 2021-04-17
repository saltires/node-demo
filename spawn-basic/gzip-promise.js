const { createReadStream, createWriteStream } = require('fs');
const { createGzip } = require('zlib');
const { pipeline } = require('stream')
const { promisify }  = require('util')
const { resolve } = require('path')
const pipe = promisify(pipeline)
const file = process.argv[2];

async function gzip(input) {
    const from = createReadStream(resolve(input))
    const to = createWriteStream(resolve(input + '.gz'))
    const transform = createGzip()
    await pipe(from, transform, to)
}

gzip(file)