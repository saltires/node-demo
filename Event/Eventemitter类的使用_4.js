const EventEmitter = require('events')

const ev = new EventEmitter()

const callback1 = () => {
  console.log('事件1执行了-1')
}

const callback2 = () => {
  console.log('事件1执行了-2')
}

ev.on('事件1', callback1)

ev.on('事件1', callback2)

ev.emit('事件1')
ev.off('事件1', callback1)
ev.emit('事件1')
// 事件1执行了-1
// 事件1执行了-2
// 事件1执行了-2