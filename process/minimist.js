/**
 * 成熟的node命令行参数解析库 minimist
 */
var argv = require('minimist')(process.argv.slice(2));
console.log(argv);