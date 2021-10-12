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
        {title: 'Song 1', songFile: '', userId: 1, createdAt: new Date(), updatedAt: new Date()},
        {title: 'Song 2', songFile: '', userId: 2, createdAt: new Date(), updatedAt: new Date()},
        {title: 'Song 3', songFile: '', userId: 2, createdAt: new Date(), updatedAt: new Date()},
        {title: 'Song 4', songFile: '', userId: 3, createdAt: new Date(), updatedAt: new Date()},
        {title: 'Song 5', songFile: '', userId: 3, createdAt: new Date(), updatedAt: new Date()}
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
