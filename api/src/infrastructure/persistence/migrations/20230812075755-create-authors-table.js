'use strict'

/** @type {import('sequelize-cli').Migration} */
const up = async (queryInterface, Sequelize) => {
	await queryInterface.createTable(
    'authors',
    {
      id: {
        type: Sequelize.DataTypes.BIGINT,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
      },
      first_name: {
        type: Sequelize.DataTypes.STRING,
        allowNull: false
      },
      last_name: {
        type: Sequelize.DataTypes.STRING,
        allowNull: false
      }
    }
  )
}

const down = async (queryInterface) => {
  await queryInterface.dropTable('authors')
}

module.exports = { up, down }
