const EventEmitter = require('events')

const ev = new EventEmitter()

ev.on('事件1', () => {
  console.log('事件1执行了-1')
})

ev.on('事件1', () => {
  console.log('事件1执行了-2')
})

ev.emit('事件1')

// 针对事件1，一共使用 on 函数注册了两次，当使用 emit 触发时，
// 可以看到执行结果和注册顺序是相同的