'use strict'

// /** @type {import('sequelize-cli').Migration} */
// module.exports = {
//   async up (queryInterface, Sequelize) {
//     /**
//      * Add altering commands here.
//      *
//      * Example:
//     */
//     await queryInterface.createTable(
//       'sellers',
//       {
//         id: {
//           type: Sequelize.DataTypes.BIGINT,
//           primaryKey: true,
//           autoIncrement: true,
//           allowNull: false
//         },
//         name: {
//           type: Sequelize.DataTypes.STRING,
//           allowNull: false
//         },
//         rating: {
//           type: Sequelize.DataTypes.TINYINT,
//           allowNull: false,
//           defaultValue: 0
//         }
//       }
//     )
//   },

//   async down (queryInterface, Sequelize) {
//     /**
//      * Add reverting commands here.
//      *
//      * Example:
//     */
//     await queryInterface.dropTable('sellers')
//   }
// }


// const Sequelize = require('sequelize');

const up = async (queryInterface, Sequelize) => {
	await queryInterface.createTable(
    'sellers',
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
      }
    }
  )
}

const down = async (queryInterface, Sequelize) => {
  await queryInterface.dropTable('sellers')
}

module.exports = { up, down }
