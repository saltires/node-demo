function MyEvent() {
  // 创建一个数据结构用于缓存订阅者信息
  this._events = Object.create(null)
}

MyEvent.prototype.on = function (type, callback) {
  // 判断当前注册的事件是否已经存在于_event，然后再决定如何做缓存
  if (this._events[type]) {
    this._events[type].push(callback)
  } else {
    this._events[type] = [callback]
  }
}

MyEvent.prototype.emit = function (type, ...args) {
  if (this._events[type] && this._events[type].length) {
    this._events[type].forEach(function (callback) {
      callback.apply(this, args)
    })
  }
}

MyEvent.prototype.off = function (type, callback) {
  // 判断当前事件是否有注册，如果有注册，则取消指定的监听
  if (this._events[type] && this._events[type].length) {
    this._events = this._events[type].filter(item => {
      return item !== callback && item.link !== callback
    })
  }
}

MyEvent.prototype.once = function(type, callback) {
  let fn = (...args) => {
    callback.apply(this, args)
    this.off(type, callback)
  }
  fn.link = callback
  this.on(type, fn)
}

let ev = new MyEvent()
let callback1 = (...args) => {
  console.log('事件1触发了-1', args)
}

ev.once('事件1', callback1)
ev.off('事件1', callback1)
ev.emit('事件1', 1, '2')

ev.emit('事件1', 1, '3')