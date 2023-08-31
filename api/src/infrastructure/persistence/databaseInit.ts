import { Sequelize } from 'sequelize'
import { migrator } from '@/infrastructure/persistence/migrator'

export const db = new Sequelize('app', '', '', {
  database: process.env.DB_NAME,
  host: './database.sqlite3',
  dialect: 'sqlite',
  logging: (str) => {
    console.log('DB: ', str)
  }
})

export const dbInit = async(): Promise<void> => {
  await db.authenticate()
    .then(() => console.log('Connected to database.'))
    // .then(() => migrator.up())
    // .then(() => console.log('Migrations successfully executed'))
}
