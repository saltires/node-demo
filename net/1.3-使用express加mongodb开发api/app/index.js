const express = require('express')
const { connectDb } = require('./util.js')
const { MongoClient } = require('mongodb')
const { ObjectID } = require('bson')

const connectUrl = 'mongodb://localhost:27017'

const dbClient = new MongoClient(connectUrl)

const app = express()

app.use(express.json())

app.get('/', (req, res) => {
  res.send('接收到请求')
})

/**
 * 添加文章
 */
app.post('/articles', async (req, res, next) => {
  try {
    const { article } = req.body

    if (!article || !article.title || !article.body || !article.description) {
      return res.status(422).json({
        error: '文章数据有误'
      })
    }

    const collection = await connectDb(dbClient, 'test', 'articles')

    article.createdTime = new Date()
    article.upadtedTime = new Date()

    const ret = await collection.insertOne(article)

    res.status(201).json({
      article: {
        ...article
      }
    })
  } catch (error) {
    next(error)
  }
})

/**
 * 查询所有的文章
 */
app.get('/articles', async (req, res, next) => {
  try {
    // 获取分页的两个参数
    const { _page = 1, _size = 10 } = req.query
    const skipParams = _size * (_page - 1)

    const collection = await connectDb(dbClient, 'test', 'articles')

    const ret = await collection.find().skip(skipParams).limit(Number(_size))

    const articles = await ret.toArray()

    // 获取该集合下所有的文档数量
    const articleCount = await collection.countDocuments()

    res.status(200).json({
      articles,
      articleCount
    })
  } catch (error) {
    next(error)
  }
})

/**
 * 查询单个文章
 */
app.get('/articles/:id', async (req, res, next) => {
  try {
    const { id } = req.params

    const collection = await connectDb(dbClient, 'test', 'articles')

    const ret = await collection.findOne({
      _id: ObjectID(id)
    })

    res.status(200).json({
      article: ret
    })

  } catch (error) {
    next(error)
  }
})

app.patch('/articles/:id', async (req, res, next) => {
  try {
    const { id } = req.params
    const collection = await connectDb(dbClient, 'test', 'articles')

    const ret = await collection.updateOne({
      _id: ObjectID(id)
    }, { $set: req.body.article })

    const updatedArticle = await collection.findOne({
      _id: ObjectID(id)
    })

    res.status(200).json({
      article: updatedArticle
    })
  } catch (error) {
    next(error)
  }
})

/**
 * 统一处理错误
 */
app.use((error, req, res, next) => {
  res.status(500).json({
    error: error.message
  })
})

app.listen(3000, () => {
  console.log("app has listenging on http://localhost:3000")
})