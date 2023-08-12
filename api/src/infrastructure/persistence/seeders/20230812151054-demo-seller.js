'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      'sellers',
      [
        {
          name: 'Samsung',
          rating: 1
        },
        {
          name: 'Sony',
          rating: 2
        },
        {
          name: 'Panasonic',
          rating: 0
        },
      ],
      {}
    )
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('sellers', null, {})
  }
}
