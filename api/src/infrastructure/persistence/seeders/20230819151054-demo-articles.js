'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      'articles',
      [
        {
          name: 'Smith, Jacobs and Kuhn',
          rating: 2,
          soldItems: 935
        },
        {
          name: 'Williams - Watsica',
          rating: 3,
          soldItems: 1081
        },
        {
          name: 'Rogahn, Cartwright and Konopelski',
          rating: 0,
          soldItems: 1557
        },
        {
          name: 'Kirlin, Cronin and Frami',
          rating: 5,
          soldItems: 731
        },
        {
          name: 'Dickinson, Collins and Gerlach',
          rating: 4,
          soldItems: 1582
        },
        {
          name: 'Ruecker, Harvey and Kautzer',
          rating: 5,
          soldItems: 926
        },
        {
          name: 'Larkin, Schuppe and Wuckert',
          rating: 0,
          soldItems: 523
        },
        {
          name: 'Koch, Jakubowski and Rohan',
          rating: 3,
          soldItems: 889
        },
        {
          name: 'Volkman Group',
          rating: 1,
          soldItems: 105
        },
        {
          name: 'Goodwin, Gerhold and Hyatt',
          rating: 2,
          soldItems: 570
        },
        {
          name: 'McGlynn and Sons',
          rating: 4,
          soldItems: 1875
        },
        {
          name: 'O\'Hara - Spencer',
          rating: 1,
          soldItems: 286
        },
        {
          name: 'Boyle - Bins',
          rating: 2,
          soldItems: 1124
        },
        {
          name: 'Gleason - Dibbert',
          rating: 1,
          soldItems: 990
        },
        {
          name: 'Kris - Douglas',
          rating: 5,
          soldItems: 669
        },
        {
          name: 'Hansen Group',
          rating: 0,
          soldItems: 1840
        },
        {
          name: 'Leuschke - Schinner',
          rating: 2,
          soldItems: 432
        },
        {
          name: 'Spencer and Sons',
          rating: 3,
          soldItems: 1617
        },
        {
          name: 'Schmitt - Moen',
          rating: 4,
          soldItems: 408
        }
      ],
      {}
    )
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('articles', null, {})
  }
}
