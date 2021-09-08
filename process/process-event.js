/**
 * 使用 process 监听脚本的执行
 * process 也实现了 EventEmitter 接口，因此具有事件的触发和监听能力
 */

// 1 监听脚本退出事件，参数 code 是退出状态码
process.on('exit', (code) => {
  // 这个回调函数内部只能写入同步代码
  console.log('exit', code)
})

process.on('beforeExit', (code) => {
  // 这个回调函数内部内可以写入异步代码
  console.log('beforeExit', code)
})

console.log('代码执行结束')

/**
代码执行结束
beforeExit 0
exit 0
*/

// 2 主动退出脚本，注意，执行此函数强制退出脚本时，不会触发exit和beforeExit的监听函数
// process.exit()

// 3 标准输入 标准输出(process.stdout，其本质属于一个可写流) 标准错误
console.log = (data) => {
  process.stdout.write('---' + data + '---' + '\n')
}

console.log(11)
console.log(22)

/**
 ---11---
 ---22---
*/