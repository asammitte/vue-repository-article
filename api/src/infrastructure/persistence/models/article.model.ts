import { DataTypes, Model, Optional } from "sequelize"
import { db } from '@/infrastructure/persistence/databaseInit'
import IArticle from '@/domain/entities/IArticle'

export interface IArticleCreate extends Optional<IArticle, 'id' | 'rating'> {}

export class Article extends Model<IArticle, IArticleCreate> implements IArticle {
  declare id: number
  declare name: string
  declare rating: number
  declare soldItems: number
}

Article.init(
  {
    id: {
      type: DataTypes.BIGINT,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    rating: {
      type: DataTypes.TINYINT,
      allowNull: false,
      defaultValue: 0
    },
    soldItems: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
  },
  {
    sequelize: db,
    tableName: 'articles',
    timestamps: false
  }
)

export default Article
