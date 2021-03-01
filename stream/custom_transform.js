const { Transform } = require('stream');
const fs = require('fs');
const file = fs.createWriteStream('./big.file');
const src = fs.createReadStream('./custom_readable.js');

const upperCaseTr = new Transform({
    transform(chunk, encoding, callback) {
        this.push(chunk.toString().toUpperCase() + '123');
        callback();
    }
});

src.on('data', (chunk) => {
    file.write(chunk);
});

src.on('end', () => {
    file.end();
});

src.pipe(upperCaseTr).pipe(file);