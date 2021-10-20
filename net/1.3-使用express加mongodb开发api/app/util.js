/**
 * 连接数据库
 */
const connectDb = async (dbClient, dbName, collectionName) => {
  await dbClient.connect()

  return dbClient.db(dbName).collection(collectionName)
}

module.exports = {
  connectDb
}