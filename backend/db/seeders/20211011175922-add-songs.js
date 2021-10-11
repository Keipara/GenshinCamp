'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkInsert('People', [{
        name: 'John Doe',
        isBetaMember: false
      }], {});
    */
      return queryInterface.bulkInsert('Songs', [
        {title: 'Song 1', songFile: '', userId: 1},
        {title: 'Song 2', songFile: '', userId: 2},
        {title: 'Song 3', songFile: '', userId: 2},
        {title: 'Song 4', songFile: '', userId: 3},
        {title: 'Song 5', songFile: '', userId: 3}
      ], {});
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      */
   return queryInterface.bulkDelete('Songs', null, {});
  }
};
