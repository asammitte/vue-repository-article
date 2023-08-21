import { DataTypes, Model, Optional } from "sequelize"
import { db } from '@/infrastructure/persistence/databaseInit'
import IStatistic from '@/domain/entities/IStatistic'
import StatisticTypeEnum from "@/domain/enums/statistic-type.enum"

export interface IStatisticCreate extends Optional<IStatistic, 'id'> {}

export class Statistic extends Model<IStatistic, IStatisticCreate> implements IStatistic {
  declare id: number
  declare parentType: StatisticTypeEnum
  declare parentId: number
  declare rating: number
  declare totalArticles: number
}

Statistic.init(
  {
    id: {
      type: DataTypes.BIGINT,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false
    },
    parentType: {
      field: 'parent_type',
      type: DataTypes.SMALLINT,
      allowNull: false
    },
    parentId: {
      field: 'parent_id',
      type: DataTypes.SMALLINT,
      allowNull: false
    },
    rating: {
      field: 'rating',
      type: DataTypes.INTEGER,
      allowNull: true
    },
    totalArticles: {
      field: 'total_articles',
      type: DataTypes.INTEGER,
      allowNull: true
    }
  },
  {
    sequelize: db,
    tableName: 'statistics',
    timestamps: false
  }
)

export default Statistic
