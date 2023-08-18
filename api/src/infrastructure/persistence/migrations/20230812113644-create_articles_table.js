'use strict'

/** @type {import('sequelize-cli').Migration} */
const up = async (queryInterface, Sequelize) => {
	await queryInterface.createTable(
    'articles',
    {
      id: {
        type: Sequelize.DataTypes.BIGINT,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
      },
      name: {
        type: Sequelize.DataTypes.STRING,
        allowNull: false
      },
      rating: {
        type: Sequelize.DataTypes.TINYINT,
        allowNull: false,
        defaultValue: 0
      },
      soldItems: {
        type: Sequelize.DataTypes.INTEGER,
        allowNull: false,
        defaultValue: 0
      }
    }
  )
}

const down = async (queryInterface) => {
  await queryInterface.dropTable('articles')
}

module.exports = { up, down }
