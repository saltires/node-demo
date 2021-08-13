const EventEmitter = require('events')

const ev = new EventEmitter()

ev.once('事件1', () => {
  console.log('事件1执行了-1')
})

ev.once('事件1', () => {
  console.log('事件1执行了-2')
})

ev.emit('事件1')
ev.emit('事件1')


// 事件1执行了-1
// 事件1执行了-2

/**
 * note： once 注册的事件监听，无论emit几次，事件监听只会触发一次
 */