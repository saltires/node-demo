/**
 * process 全局变量提供的关于脚本执行时参数、脚本执行时间等信息
 */

// 1 脚本执行参数
console.log(process.argv)
/**
  PS E:\project\owner\node-demo\process> node .\process-argv.js x y
  [
    'C:\\Program Files\\nodejs\\node.exe',
    'E:\\project\\owner\\node-demo\\process\\process-argv.js',
    'x',
    'y'
  ]
  // Note: argv是一个数组，第一个值很明显表示node可执行文件的绝对路径，第二个参数
  则表示当前执行脚本的绝对路径，从第三个参数开始，则是用户执行脚本时传入的参数，例如上面
  的脚本命令，传入了 x 、y ，那么argv'第三个参数开始，便是用户执行脚本时自行传入的参数
 */

// 2 获取当前脚本执行时的进程pid
console.log(process.pid) // 21208

// 3 获取当前脚本已执行时间
console.log(process.uptime()) // 0.036152

const { age } = require('./foo.js')

console.log(age)