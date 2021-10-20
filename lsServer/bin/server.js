#!/usr/bin/env node
const { program } = require('commander')
// console.log('server开始执行')
let version = require('../package.json').version

const options = {
  "-p, --port <port>": {
    "description": "init server port",
    "example": "lsserver -p 3306"
  },
  "-d, --directory <dir>": {
    "description": "init server directory",
    "example": "lsserver -d /test"
  }
} 

function initOptions(configs, cb) {
  Object.entries(configs).forEach(([key, val]) => {
    cb(key, val)
  })
}

initOptions(options, (cmd, val) => {
  program.option(cmd, val.description)
})

program.name('lsserver')
program.version(version)

const userConfig = program.parse(process.argv)

// console.log(userConfig)
let Server = require('../main.js')
new Server(userConfig._optionValues).start()