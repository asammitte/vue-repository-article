import { Sequelize } from 'sequelize'

const db = new Sequelize('app', '', '', {
  database: 'marketplace',
  host: './database.sqlite3',
  dialect: 'sqlite',
  logging: true
})

export default db
