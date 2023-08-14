import { DataTypes, Model, Optional } from "sequelize"
import { db } from '@/infrastructure/persistence/databaseInit'
import ISeller from '@/domain/entities/ISeller'

export interface ISellerCreate extends Optional<ISeller, 'id' | 'rating'> {}

export class Seller extends Model<ISeller, ISellerCreate> {
  declare id: number
  declare name: string
  declare rating: number
}

Seller.init(
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
    }
  },
  {
    sequelize: db,
    tableName: 'sellers',
    timestamps: false
  }
)

export default Seller
