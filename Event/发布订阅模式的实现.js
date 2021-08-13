class PubSub {
  constructor() {
    this._events = {}
  }

  // 注册
  on(event, callback) {
    if (this._events[event]) {
      this._events[event].push(callback)
    } else {
      this._events[event] = [callback]
    }
  }

  // 发布
  emit(event, ...args) {
    const callBacks = this._events[event]

    if (callBacks && callBacks.length) {
      callBacks.forEach(function(cbFn) {
        cbFn.apply(this, args)
      });
    }
  }
}

let ps = new PubSub()

ps.on('事件1', () => {
  console.log('事件1执行了-1')
})

ps.on('事件1', () => {
  console.log('事件1执行了-2')
})

ps.emit('事件1')
ps.emit('事件1')
// 事件1执行了-1
// 事件1执行了-2
// 事件1执行了-1
// 事件1执行了-2

