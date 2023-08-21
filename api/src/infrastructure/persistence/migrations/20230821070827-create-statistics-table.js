'use strict';

/** @type {import('sequelize-cli').Migration} */
const up = async (queryInterface, Sequelize) => {
	await queryInterface.createTable(
    'statistics',
    {
      id: {
        type: Sequelize.DataTypes.BIGINT,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
      },
      parent_type: {
        type: Sequelize.DataTypes.SMALLINT,
        allowNull: false
      },
      parent_id: {
        type: Sequelize.DataTypes.BIGINT,
        allowNull: false
      },
      rating: {
        type: Sequelize.DataTypes.INTEGER,
        allowNull: false,
        defaultValue: 0
      },
      total_articles: {
        type: Sequelize.DataTypes.INTEGER,
        allowNull: true,
        defaultValue: 0
      }
    }
  )
}

const down = async (queryInterface) => {
  await queryInterface.dropTable('statistics')
}

module.exports = { up, down }
