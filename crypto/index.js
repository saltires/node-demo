const crytpo = require("crypto");

let md5 = crytpo.createHash("md5"); // 创建 md5
let md5Sum = md5.update("qishi666***...@@@"); // update 加密
let result = md5Sum.digest('hex'); // 获取加密后结果

console.log(result);