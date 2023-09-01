import { db } from '@/infrastructure/persistence/databaseInit'
import { Sequelize } from "sequelize"

export default class BaseRepository {
  private dbContext: Sequelize
  constructor() {
    this.dbContext = db
  }

  get db(): Sequelize {
    return this.dbContext
  }
}
