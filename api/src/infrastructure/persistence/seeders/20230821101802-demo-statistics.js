'use strict';

/** @type {import('sequelize-cli').Migration} */
const up = async (queryInterface, Sequelize) => {
	await queryInterface.bulkInsert(
    'statistics',
    [
      { id: 1, parent_type: 1, parent_id: 1, likes: 124 },
      { id: 2, parent_type: 1, parent_id: 2, likes: 328 },
      { id: 3, parent_type: 1, parent_id: 3, likes: 245 },
      { id: 4, parent_type: 1, parent_id: 4, likes: 189 },
      { id: 5, parent_type: 1, parent_id: 5, likes: 76 },
      { id: 6, parent_type: 1, parent_id: 6, likes: 312 },
      { id: 7, parent_type: 1, parent_id: 7, likes: 412 },
      { id: 8, parent_type: 1, parent_id: 8, likes: 283 },
      { id: 9, parent_type: 1, parent_id: 9, likes: 179 },
      { id: 10, parent_type: 1, parent_id: 10, likes: 264 },
      { id: 11, parent_type: 1, parent_id: 11, likes: 96 }
    ]
  )
}

const down = async (queryInterface) => {
  await queryInterface.bulkDelete('statistics', null, {})
}

module.exports = { up, down }
