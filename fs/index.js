const fs = require('fs')

/**
 * fs 模块的写入文件 API
 * @param {string} -- 文件名称，文件名称所涉及的目录必须存在
 * @param {string} -- 文件内容
 */
// fs.writeFile('./message.txt', 'Hello Node', function (err) {
//     if (err) throw err;
//     console.log('文件写入成功');
// });

/**
 * fs 模块的写入文件 API -- 同步版本
 * @param {string} -- 文件名称，文件名称所涉及的目录必须存在
 * @param {string} -- 文件内容
 */
// try {
//     fs.writeFileSync('./message.txt', 'Hello Node')
//     console.log('文件写入成功');
// } catch {
//     console.log('文件写入失败');
// }

// fs.readFile('./message.txt', 'UTF-8', function (err, data) {
//     if (err) throw err;
//     console.log(data);
// });

// message.txt中的内容为 hihi
// fs.readFile('./message.txt', function (err, data) {
//     if (err) throw err;
//     // 当没有指定编码格式时，读取到的内容为原始的二进制数据 这时需要调用 buffer 对象的 toString 方法将其转为字符串
//     /** @expect <Buffer 68 69 68 69> */
//     console.log(data);
//     /** @expect hihi */
//     console.log(data.toString())
// });