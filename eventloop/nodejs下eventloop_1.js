setTimeout(() => {
  console.log('s1')
})

Promise.resolve().then(() => {
  console.log('p1')
})

console.log('start')

// Nodejs 平台下独有的一个微任务
// 在浏览器平台下，我们认为存储微任务的数据结构是一种队列结构，因为它具有先进先出的特性，但是在Node平台下，我们不能再称呼存储微任务的数据结构为队列，因为它不具备先进先出的特性
// 为什么这么说呢，拿 nextTick 来说，它的执行优先级就高于其它的微任务，即使其它的微任务存放的时间点早于 nextTick，在清空微任务时，nextTick 也会先执行
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