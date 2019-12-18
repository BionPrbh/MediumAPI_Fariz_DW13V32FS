'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    
   return queryInterface.bulkInsert('Categories', [
      {
        name:'Onezero',
        is_published:1,
        is_archived:0,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name:'Programming',
        is_published:1,
        is_archived:0,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name:'Cooking',
        is_published:1,
        is_archived:0,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name:'Sports',
        is_published:1,
        is_archived:0,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name:'Zora',
        is_published:1,
        is_archived:0,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name:'Forge',
        is_published:1,
        is_archived:0,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name:'Marker',
        is_published:1,
        is_archived:0,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name:'Subnautica',
        is_published:1,
        is_archived:0,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name:'Heated',
        is_published:1,
        is_archived:0,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name:'Modus',
        is_published:1,
        is_archived:0,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name:'Whealth',
        is_published:1,
        is_archived:0,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name:'Wisdom',
        is_published:1,
        is_archived:0,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name:'Myth',
        is_published:1,
        is_archived:0,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name:'Cosmic',
        is_published:1,
        is_archived:0,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name:'Oneday',
        is_published:1,
        is_archived:0,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name:'Impact',
        is_published:1,
        is_archived:0,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name:'Earthling',
        is_published:1,
        is_archived:0,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name:'Humane',
        is_published:1,
        is_archived:0,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name:'Deep',
        is_published:1,
        is_archived:0,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name:'Generation',
        is_published:1,
        is_archived:0,
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ])
  },

  down: (queryInterface, Sequelize) => {

   return queryInterface.bulkDelete('Categories', null, {})
  }
};
