// register module on production to resolve absolute paths in builded project
if (!process.env.IS_TS_NODE) {
  require('module-alias/register')
}

import apiErrorHandler from '@/presentation/error/api-error-handler'
import express, { Express, json } from 'express'
import { dbInit } from '@/infrastructure/persistence/databaseInit'
import routes from '@/presentation/main.router'

const app: Express = express()
const port = 5051

app.use(json())

routes(app)
app.use(apiErrorHandler)

const start = async () => {
  try {
    await dbInit()
    app.listen(port, '0.0.0.0', () => {
      console.log(`[Server]: running at http://localhost:${port}`)
    })
  } catch (error) {
      console.log('Failed to connect to the database, server is not running.');
  }
}

start()
