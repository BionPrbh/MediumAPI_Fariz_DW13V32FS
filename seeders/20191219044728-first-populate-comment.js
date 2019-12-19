'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
   queryInterface.bulkInsert('Comments',[
     {
      comment:'asdasdasd',
      is_published:1,
      is_archived:0,
      article_id:1,
      user_id:1,
      createdAt:new Date(),
      UpdatedAt:new Date()
     },
     {
      comment:'asdasdasd',
      is_published:1,
      is_archived:0,
      article_id:2,
      user_id:1,
      createdAt:new Date(),
      UpdatedAt:new Date()
     },
     {
      comment:'asdasdasd',
      is_published:1,
      is_archived:0,
      article_id:3,
      user_id:1,
      createdAt:new Date(),
      UpdatedAt:new Date()
     },
     {
      comment:'asdasdasd',
      is_published:1,
      is_archived:0,
      article_id:4,
      user_id:2,
      createdAt:new Date(),
      UpdatedAt:new Date()
     },
     {
      comment:'asdasdasd',
      is_published:1,
      is_archived:0,
      article_id:5,
      user_id:2,
      createdAt:new Date(),
      UpdatedAt:new Date()
     },
     {
      comment:'',
      is_published:1,
      is_archived:0,
      article_id:6,
      user_id:3,
      createdAt:new Date(),
      UpdatedAt:new Date()
     }
   ])
  },

  down: (queryInterface, Sequelize) => {
   queryInterface.bulkDelete('Comments', null, {})
  }
};
