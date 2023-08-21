'use strict';

/** @type {import('sequelize-cli').Migration} */
const up = async (queryInterface, Sequelize) => {
	await queryInterface.bulkInsert(
    'authors',
    [
      { id: 1, first_name: 'Alice', last_name: 'Johnson' },
      { id: 2, first_name: 'Bob', last_name: 'Smith' },
      { id: 3, first_name: 'Claire', last_name: 'Williams' },
      { id: 4, first_name: 'David', last_name: 'Brown' },
      { id: 5, first_name: 'Emily', last_name: 'Jones' },
      { id: 6, first_name: 'Frank', last_name: 'Davis' },
      { id: 7, first_name: 'Grace', last_name: 'Miller' },
      { id: 8, first_name: 'Henry', last_name: 'Martinez' },
      { id: 9, first_name: 'Isabel', last_name: 'Garcia' },
      { id: 10, first_name: 'John', last_name: 'Thompson' },
      { id: 11, first_name: 'Karen', last_name: 'White' }
    ]
  )
}

const down = async (queryInterface) => {
  await queryInterface.bulkDelete('authors', null, {})
}

module.exports = { up, down }
