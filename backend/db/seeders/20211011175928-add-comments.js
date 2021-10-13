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
      return queryInterface.bulkInsert('Comments', [
        {body: 'This is cool!', songId: 1, userId: 2, createdAt: new Date(), updatedAt: new Date()},
        {body: 'This is cool x2!', songId: 2, userId: 3, createdAt: new Date(), updatedAt: new Date()},
        {body: 'This is cool x3!', songId: 3, userId: 3, createdAt: new Date(), updatedAt: new Date()},
        {body: 'This is cool x4!', songId: 4, userId: 1, createdAt: new Date(), updatedAt: new Date()},
        // {body: 'This is cool x5!', songId: 4, userId: 1, createdAt: new Date(), updatedAt: new Date()}
      ], {});
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      */
   return queryInterface.bulkDelete('Comments', null, {});
  }
};
