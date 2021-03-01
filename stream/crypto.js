const crypto = require('crypto');
const fs = require("fs")

fs.createReadStream('big.file')
  .pipe(crypto.createCipher('aes192', 'a_secret'))
  .pipe(fs.createWriteStream('big.file.zz'))
  .on('finish', () => console.log('Done'));

fs.createReadStream('big.file.zz')
  .pipe(crypto.createDecipher('aes192', 'a_secret'))
  .pipe(fs.createWriteStream('big.file'))
  .on('finish', () => console.log('Done'));