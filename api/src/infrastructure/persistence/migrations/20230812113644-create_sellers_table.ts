import { DataTypes } from 'sequelize';
import type { Migration } from '../migrator'

export const up: Migration = async ({ context: sequelize }) => {
	await sequelize.getQueryInterface().createTable(
    'sellers',
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
    }
  )
}

export const down: Migration = async ({ context: sequelize }) => {
  await sequelize.getQueryInterface().dropTable('sellers')
}
