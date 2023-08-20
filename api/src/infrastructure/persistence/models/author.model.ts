import { DataTypes, Model, Optional } from "sequelize"
import { db } from '@/infrastructure/persistence/databaseInit'
import IAuthor from '@/domain/entities/IAuthor'

export interface IAuthorCreate extends Optional<IAuthor, 'id'> {}

export class Author extends Model<IAuthor, IAuthorCreate> implements IAuthor {
  declare id: number
  declare first_name: string
  declare last_name: string
}

Author.init(
  {
    id: {
      type: DataTypes.BIGINT,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false
    },
    first_name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    last_name: {
      type: DataTypes.STRING,
      allowNull: false
    },
  },
  {
    sequelize: db,
    tableName: 'authors',
    timestamps: false
  }
)

export default Author
