'use strict';

/** @type {import('sequelize-cli').Migration} */
const up = async (queryInterface, Sequelize) => {
	await queryInterface.bulkInsert(
    'statistics',
    [
      // authors stats
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
      { id: 11, parent_type: 1, parent_id: 11, likes: 96 },
      // articles stats
      { id: 12, parent_type: 2, parent_id: 1, likes: 124 },
      { id: 13, parent_type: 2, parent_id: 2, likes: 328 },
      { id: 14, parent_type: 2, parent_id: 3, likes: 245 },
      { id: 15, parent_type: 2, parent_id: 4, likes: 189 },
      { id: 16, parent_type: 2, parent_id: 5, likes: 76 },
      { id: 17, parent_type: 2, parent_id: 6, likes: 312 },
      { id: 18, parent_type: 2, parent_id: 7, likes: 412 },
      { id: 19, parent_type: 2, parent_id: 8, likes: 283 },
      { id: 20, parent_type: 2, parent_id: 9, likes: 179 },
      { id: 21, parent_type: 2, parent_id: 10, likes: 264 },
      { id: 22, parent_type: 2, parent_id: 11, likes: 96 },
      { id: 23, parent_type: 2, parent_id: 12, likes: 245 },
      { id: 24, parent_type: 2, parent_id: 13, likes: 73 },
      { id: 25, parent_type: 2, parent_id: 14, likes: 89 },
      { id: 26, parent_type: 2, parent_id: 15, likes: 51 },
      { id: 27, parent_type: 2, parent_id: 16, likes: 68 },
      { id: 28, parent_type: 2, parent_id: 17, likes: 105 },
      { id: 29, parent_type: 2, parent_id: 18, likes: 82 },
      { id: 30, parent_type: 2, parent_id: 19, likes: 57 },
      { id: 31, parent_type: 2, parent_id: 20, likes: 73 },
      { id: 32, parent_type: 2, parent_id: 21, likes: 88 },
      { id: 33, parent_type: 2, parent_id: 22, likes: 64 },
      { id: 34, parent_type: 2, parent_id: 23, likes: 92 },
      { id: 35, parent_type: 2, parent_id: 24, likes: 113 },
      { id: 36, parent_type: 2, parent_id: 25, likes: 80 },
      { id: 37, parent_type: 2, parent_id: 26, likes: 98 },
      { id: 38, parent_type: 2, parent_id: 27, likes: 42 },
      { id: 39, parent_type: 2, parent_id: 28, likes: 76 },
      { id: 40, parent_type: 2, parent_id: 29, likes: 65 },
      { id: 41, parent_type: 2, parent_id: 30, likes: 94 },
      { id: 42, parent_type: 2, parent_id: 31, likes: 59 },
      { id: 43, parent_type: 2, parent_id: 32, likes: 85 },
      { id: 44, parent_type: 2, parent_id: 33, likes: 70 },
      { id: 45, parent_type: 2, parent_id: 34, likes: 79 },
      { id: 46, parent_type: 2, parent_id: 35, likes: 55 },
      { id: 47, parent_type: 2, parent_id: 36, likes: 102 },
      { id: 48, parent_type: 2, parent_id: 37, likes: 119 },
      { id: 49, parent_type: 2, parent_id: 38, likes: 88 },
      { id: 50, parent_type: 2, parent_id: 39, likes: 74 },
      { id: 51, parent_type: 2, parent_id: 40, likes: 83 },
      { id: 52, parent_type: 2, parent_id: 41, likes: 66 },
      { id: 53, parent_type: 2, parent_id: 42, likes: 101 },
      { id: 54, parent_type: 2, parent_id: 43, likes: 55 },
      { id: 55, parent_type: 2, parent_id: 44, likes: 81 }
    ]
  )
}

const down = async (queryInterface) => {
  await queryInterface.bulkDelete('statistics', null, {})
}

module.exports = { up, down }
