'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Articles',[
        {
          title:"Fundamental React",
          category_id:1,
          content:"text content",
          image:"https://miro.medium.com/max/5405/1*RXxLYTpJYoTjHN2C3LdpUg.jpeg",
          category_id:1,
          category_name:"Onezero",
          is_published:1,
          is_archived:0,
          slug:"fundamental-javascript",
          author_id:1,
          createdAt: new Date(),
          updatedAt: new Date(),

        },
        {
          title:"Fundamental Native",
          content:"text Content",
          image:"https://miro.medium.com/max/2000/1*BpGaEH_HqjQXJ14M2V9l5Q.jpeg",
          category_id:1,
          category_name:"Onezero",
          is_published:1,
          is_archived:0,
          slug:"fundamental-native",
          author_id:1,
          createdAt: new Date(),
          updatedAt: new Date(),

        },
        {
          title:"Fundamental Javascript",
          content:"text content",
          image:"https://miro.medium.com/max/2000/1*BpGaEH_HqjQXJ14M2V9l5Q.jpeg",
          category_id:1,
          category_name:"Onezero",
          is_published:1,
          is_archived:0,
          slug:"fundamental-javascript",
          author_id:1,
          createdAt: new Date(),
          updatedAt: new Date()
        }
      ]
    )
  },

  down: (queryInterface, Sequelize) => {

   return queryInterface.bulkDelete('Articles', null, {})
  }
};
