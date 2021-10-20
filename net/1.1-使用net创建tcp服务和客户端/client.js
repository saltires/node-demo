const net = require('net')

const client = net.createConnection({
  port: 1234,
  host: '127.0.0.1'
})


client.on('connect', () => {
  client.write('客户端的第一次数据')
  console.log(client.remoteAddress)
  console.log(client.remotePort)
  console.log(client.bytesRead)
  console.log(client.readyState)
})

client.on('data', chunk => {
  console.log(chunk.toString())
  console.log(client.bytesRead)
  console.log(client.readyState)
})

client.on('close', () => {
  console.log('客户端断开链接')
})