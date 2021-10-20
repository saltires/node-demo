const net = require('net')

const server = net.createServer()

const POST = 1234
const HOST = 'localhost'

server.listen(POST, HOST)

server.on('listening', () => {
  console.log(`服务已开启于${HOST}:${POST}`)
  // console.log('opened server on', server.address());
})

server.on('connection', (socket) => {
  console.log('opened server on', server.address());
  server.getConnections((err, count) => {
    console.log('并发链接数：' , count)
  })
  socket.on('data', (chunk) => {
    const msg = chunk.toString()
    console.log(msg)
    socket.write(chunk)
  })
})
