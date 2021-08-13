const EventEmitter = require('events')

const ev = new EventEmitter()

const callback1 = (a, b) => {
  console.log('事件1执行了-1', a, b)
}

const callback2 = (a, b) => {
  console.log('事件1执行了-2', a, b)
}

ev.on('事件1', callback1)

ev.on('事件1', callback2)

ev.emit('事件1', 'x', 'y')
ev.emit('事件1')

// 事件1执行了-1 x y
// 事件1执行了-2 x y
// 事件1执行了-1 undefined undefined
// 事件1执行了-2 undefined undefined