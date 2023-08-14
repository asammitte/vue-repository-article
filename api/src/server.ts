// register module on production to resolve absolute paths in builded project
if (!process.env.IS_TS_NODE) {
  require('module-alias/register')
}

import express, { Express, Request, Response, json } from 'express'
import sellersRouter from '@/routes/sellers.route'
import { dbInit } from '@/infrastructure/persistence/databaseInit'

const app: Express = express()
const port = 5051

app.use(json())

app.get('/', (req: Request, res: Response) => {
  res.json({ message: 'ok' })
})

app.use('/sellers', sellersRouter)

const start = async () => {
  try {
    await dbInit()
    app.listen(port, '0.0.0.0', () => {
      console.log(`[Server]: running at http://localhost:${port}`)
    })
  } catch (error) {
      console.log(error);
      console.log('Failed to connect to the database, server is not running.');
  }
}

start()
