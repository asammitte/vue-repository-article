if(!process.env.IS_TS_NODE) {
  require('module-alias/register');
}

import express, { Express, Request, Response, json } from 'express'
import sellersRouter from '@/routes/sellers.route'
import db from '@/configs/database.config'
import { migrator } from '@/infrastructure/persistence/migrator'

// db.sync().then(() => {
//   console.log('Connected to database.')
// })

db.authenticate()
  .then(() => console.log('Connected to database.'))
  .then(() => migrator.up())
  .then(() => console.log('Migrations successfully executed'))

const app: Express = express()
const port = 5051

app.use(json())

app.get('/', (req: Request, res: Response) => {
  res.json({ 'message': 'ok' })
})

app.use('/sellers', sellersRouter)

app.listen(port, '0.0.0.0', () => {
  console.log(`[Server]: running at http://localhost:${port}`)
})
