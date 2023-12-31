// register module on production to resolve absolute paths in builded project
if (!process.env.IS_TS_NODE) {
  require('module-alias/register')
}

import 'dotenv/config'
import { dbInit } from '@/infrastructure/persistence/databaseInit'
import express, { Express, json } from 'express'
import apiErrorHandler from '@/presentation/errors/api-error-handler'
import routes from '@/presentation/main.router'

const app: Express = express()
app.set('port', process.env.PORT)
app.use(json())

routes(app)
app.use(apiErrorHandler)

const start = async () => {
  try {
    await dbInit()
    const port = app.get('port')
    app.listen(port, '0.0.0.0', () => {
      console.log(`[Server]: running at http://localhost:${port}`)
    })
  } catch (error) {
      console.log('Failed to connect to the database, server is not running.');
  }
}

start()
