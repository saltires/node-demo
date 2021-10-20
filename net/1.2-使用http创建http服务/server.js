const http = require('http')
const url = require('url')

/**
 * req 是一个可读流
 * res 是一个可写流
 */
const server = http.createServer((req, res) => {
  // 1 访问路径
  // console.log(req.url)

  // url 模块可以用于解析请求url路径，将其解析分解
  // console.log(url.parse(req.url))

  // 2 请求头信息集合
  // console.log(req.headers)

  // 3 请求方法
  // console.log(req.method)

  // 4 请求的http协议版本
  // console.log(req.httpVersion)

  // 5 读取post请求请求体中内容需要通过消费这个req可读流实现
  let arr = []
  req.on('data', (data) => {
    arr.push(data)
  })
  req.on('end', () => {
    console.log(Buffer.concat(arr).toString())
  })

  // console.log(res)
  res.writeHead(200, { 'Content-Type': 'application/json' });
  res.end(JSON.stringify({
    data: 'Hello World!'
  }));
})

server.listen(1234, () => {
  console.log('服务已监听于http://localhost:1234')
})