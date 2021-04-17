const crypto = require('crypto');

const algorithm = 'aes-192-cbc';
const password = '用于生成密钥的密码';
// 改为使用异步的 `crypto.scrypt()`。
const key = crypto.scryptSync(password, '盐值', 24);
// IV 通常与密文一起传递。
const iv = Buffer.alloc(16, 0); // 初始化向量。

const decipher = crypto.createDecipheriv(algorithm, key, iv);

// 使用相同的算法、密钥和 iv 进行加密。
const encrypted =
  '9d47959b80d428936beef61216ef0b7653b5d23a670e082bd739f6cebcb6038f';
let decrypted = decipher.update(encrypted, 'hex', 'utf8');
console.log('decrypted', decrypted)
decrypted += decipher.final('utf8');
console.log(decrypted);