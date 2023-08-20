import { DataTypes, Model, Optional } from "sequelize"
import { db } from '@/infrastructure/persistence/databaseInit'
import IAuthor from '@/domain/entities/IAuthor'

export interface IAuthorCreate extends Optional<IAuthor, 'id'> {}

export class Author extends Model<IAuthor, IAuthorCreate> implements IAuthor {
  declare id: number
  declare firstName: string
  declare lastName: string
}

Author.init(
  {
    id: {
      type: DataTypes.BIGINT,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false
    },
    firstName: {
      field: 'last_name',
      type: DataTypes.STRING,
      allowNull: false
    },
    lastName: {
      field: 'last_name',
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
