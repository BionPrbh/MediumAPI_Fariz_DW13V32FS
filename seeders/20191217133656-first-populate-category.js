'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    
   return queryInterface.bulkInsert('Categories', [
      {
        name:'Onezero',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name:'Programming',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name:'Cooking',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name:'Sports',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name:'Zora',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name:'Forge',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name:'Marker',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name:'Subnautica',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name:'Heated',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name:'Modus',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name:'Whealth',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name:'Wisdom',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name:'Myth',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name:'Cosmic',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name:'Oneday',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name:'Impact',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name:'Earthling',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name:'Humane',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name:'Deep',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name:'Generation',
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ])
  },

  down: (queryInterface, Sequelize) => {

   return queryInterface.bulkDelete('Categories', null, {})
  }
};
