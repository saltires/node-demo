const fs = require('fs');
const zlib = require('zlib');
const file = process.argv[2];
const isgzip = process.argv[3];

if (isgzip === "true") {
    console.log(1)
    fs.createReadStream(file)
        .pipe(zlib.createGzip())
        .on('data', () => process.stdout.write('start!\n'))
        .pipe(fs.createWriteStream(file + '.gz'))
        .on('finish', () => console.log('Done'));
} else {
    console.log(2)
    fs.createReadStream(file + '.gz')
        .pipe(zlib.createGunzip())
        .on('data', () => process.stdout.write('start!\n'))
        .pipe(fs.createWriteStream(file))
        .on('finish', () => console.log('Done'));
}