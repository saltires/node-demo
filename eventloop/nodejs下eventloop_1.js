setTimeout(() => {
  console.log('s1')
})

Promise.resolve().then(() => {
  console.log('p1')
})

console.log('start')

// Nodejs 平台下独有的一个微任务
process.nextTick(() => {
  console.log('tick')
})

setImmediate(() => {
  console.log('setImmediate')
})

console.log('end')
// start
// end
// tick
// p1
// s1
// setImmediate