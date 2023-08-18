import { QueryInterface, DataTypes, QueryTypes } from 'sequelize';

module.exports = {
  up: (queryInterface: QueryInterface): Promise<void> => queryInterface.sequelize.transaction(
      async (transaction) => {
        await queryInterface.createTable(
          'articles',
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
  ),
  down: (queryInterface: QueryInterface): Promise<void> => queryInterface.sequelize.transaction(
    async (transaction) => {
      // here go all migration undo changes
    }
  )
}
