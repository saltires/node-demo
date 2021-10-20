const http = require('http')
const url = require('url')
const path = require('path')
const fs = require('fs').promises
const { createReadStream } = require('fs')
const mime = require('mime')
const ejs = require('ejs')
let { promisify } = require('util')

function mergeConfig(config) {
  return {
    port: 1234,
    directory: process.cwd(),
    ...config
  }
}

class Server {
  constructor(config) {
    this.config = mergeConfig(config)
    console.log(this.config)
  }

  start() {
    // console.log('执行了')
    let server = http.createServer(this.serverHandler.bind(this))
    server.listen(this.config.port, () => {
      console.log('服务端启动了....')
    })
  }

  async serverHandler(req, res) {
    let { pathname } = url.parse(req.url)
    pathname = decodeURIComponent(pathname)
    // console.log(pathname)
    let abspath = path.join(this.config.directory, pathname)
    console.log(abspath)

    try {
      let statObj = await fs.stat(abspath)
      // console.log(statObj)
      if (statObj.isFile()) {
        this.fileHander(req, res, abspath)
      } else {
        this.dirHander(req, res, abspath, pathname)
      }
    } catch (error) {
      this.errorHander(req, res, error)
    }
  }

  errorHander(req, res, error) {
    // console.log(error)
    res.statusCode = 404
    res.setHeader('Content-type', 'text/html;charset=utf-8')
    res.end('Not Found')
  }

  fileHander(req, res, abspath) {
    res.statusCode = 200
    res.setHeader('Content-type', mime.getType(abspath) + ';charset=utf-8')
    createReadStream(abspath).pipe(res)
  }

  async dirHander(req, res, abspath, pathname) {
    let dirs = await fs.readdir(abspath)

    let parentpath = path.dirname(pathname)

    dirs = dirs.map(item => {
      return {
        dir: item,
        path: path.join(pathname, item),
      }
    })
    // console.log(dirs)
    let renderFile = promisify(ejs.renderFile)
    let ret = await renderFile(path.resolve(__dirname, 'template.html'), { arr: dirs, parent: pathname === '/' ? false : true,  parentpath: parentpath })
    res.end(ret)
  }
}

module.exports = Server