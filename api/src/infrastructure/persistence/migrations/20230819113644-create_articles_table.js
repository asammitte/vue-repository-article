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
      author_id: {
        type: Sequelize.DataTypes.BIGINT,
        allowNull: false,
        references: {
          model: 'authors',
          key: 'id'
        }
      },
      title: {
        type: Sequelize.DataTypes.STRING,
        allowNull: false
      },
      content: {
        type: Sequelize.DataTypes.TEXT,
        allowNull: true,
        defaultValue: ''
      }
    }
  )
}

const down = async (queryInterface) => {
  await queryInterface.dropTable('articles')
}

module.exports = { up, down }
