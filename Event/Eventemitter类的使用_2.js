const EventEmitter = require('events')

const ev = new EventEmitter()

ev.on('事件1', () => {
  console.log('事件1执行了-1')
})

ev.on('事件1', () => {
  console.log('事件1执行了-2')
})

ev.emit('事件1')
ev.emit('事件1')

// 和 1 一样的注册事件，只不过这里 emit 了两次事件1，可以看到执行时每个回调函数都执行了两次