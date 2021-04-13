const util = require('util')
const { EventEmitter } = require('events')

const Ticket = function() {
    setInterval(() => {
        this.emit('tick', 'aaa', 'bbb')
    }, 1000)
}

util.inherits(Ticket, EventEmitter)

const foo = new Ticket()

foo.on('tick', (a, b) => {
    console.log('tick 事件触发了', a, b);
})