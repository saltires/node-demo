import express from 'express'
import { Dataparser } from './data'

const app = express()

app.use('/', (req, res) => {
  res.json(Dataparser.list)
})

app.listen(3000, () => {
  console.log('服务开启于 http://localhost:3000')
})