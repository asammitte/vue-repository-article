'use strict';

/** @type {import('sequelize-cli').Migration} */
const up = async (queryInterface, Sequelize) => {
	await queryInterface.bulkInsert(
    'statistics',
    [
      { id: 1, parent_type: 1, parent_id: 1, rating: 124, total_articles: 2 },
      { id: 2, parent_type: 1, parent_id: 2, rating: 328, total_articles: 2 },
      { id: 3, parent_type: 1, parent_id: 3, rating: 245, total_articles: 3 },
      { id: 4, parent_type: 1, parent_id: 4, rating: 189, total_articles: 2 },
      { id: 5, parent_type: 1, parent_id: 5, rating: 76, total_articles: 2 },
      { id: 6, parent_type: 1, parent_id: 6, rating: 312, total_articles: 3 },
      { id: 7, parent_type: 1, parent_id: 7, rating: 412, total_articles: 3 },
      { id: 8, parent_type: 1, parent_id: 8, rating: 283, total_articles: 2 },
      { id: 9, parent_type: 1, parent_id: 9, rating: 179, total_articles: 3 },
      { id: 10, parent_type: 1, parent_id: 10, rating: 264, total_articles: 3 },
      { id: 11, parent_type: 1, parent_id: 11, rating: 96, total_articles: 2 }
    ]
  )
}

const down = async (queryInterface) => {
  await queryInterface.bulkDelete('statistics', null, {})
}

module.exports = { up, down }
