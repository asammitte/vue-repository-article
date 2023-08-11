import { DataTypes, Model, Optional } from "sequelize"
import db from '@/configs/database.config'

export interface ISeller {
  id: number;
  name: string;
  rating: number;
}

export interface ISellerCreate extends Optional<ISeller, 'id' | 'rating'> {}

export class Seller extends Model<ISeller, ISellerCreate> {
  public id: number
  public name: string
  public rating: number
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
    tableName: 'sellers'
  }
)

export default Seller
