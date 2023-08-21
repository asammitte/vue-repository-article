import { DataTypes, Model, Optional } from "sequelize"
import { db } from '@/infrastructure/persistence/databaseInit'
import IArticle from '@/domain/entities/IArticle'

export interface IArticleCreate extends Optional<IArticle, 'id'> {}

export class Article extends Model<IArticle, IArticleCreate> implements IArticle {
  declare id: number
  declare authorId: number
  declare title: string
  declare content: string
}

Article.init(
  {
    id: {
      type: DataTypes.BIGINT,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false
    },
    authorId: {
      field: 'author_id',
      type: DataTypes.BIGINT,
      allowNull: false,
      references: {
        model: 'authors',
        key: 'id'
      }
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false
    },
    content: {
      type: DataTypes.TEXT,
      allowNull: true,
      defaultValue: ''
    }
  },
  {
    sequelize: db,
    tableName: 'articles',
    timestamps: false
  }
)

export default Article
