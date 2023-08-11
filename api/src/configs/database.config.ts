import { Sequelize } from 'sequelize'

const db = new Sequelize('app', '', '', {
  database: './database.sqlite',
  dialect: 'sqlite',
  logging: true
})

export default db
