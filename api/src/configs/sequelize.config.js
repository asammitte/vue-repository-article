require('dotenv').config()

module.exports = {
  development: {
    dialect: 'sqlite',
    storage: './database.sqlite3',
    database: process.env.DB_NAME,
    migrationStorageTableName: 'sequelize_migrations',
    seederStorage: 'sequelize',
    seederStorageTableName: 'sequelize_seeds'
  }
}
