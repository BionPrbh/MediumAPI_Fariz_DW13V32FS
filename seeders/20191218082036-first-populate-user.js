'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {

    return queryInterface.bulkInsert('Users', [
        {
          fullname: "rahmad zaini",
          username: "razatozai",
          email: "razatozam@mail.com",
          password: "paswoot",
          is_active: 1,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          fullname: "amiwho",
          username: "whoami",
          email: "whoami@mail.com",
          password: "paswoot",
          is_active: 1,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          fullname: "brian",
          username: "breee",
          email: "brian@mail.com",
          password: "paswoot",
          is_active: 1,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          fullname: "siapasaya",
          username: "siapalu",
          email: "siapakek@mail.com",
          password: "paswoot",
          is_active: 1,
          createdAt: new Date(),
          updatedAt: new Date()
        },
      ]
    )
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('People', null, {});
    */
    return queryInterface.bulkDelete('People', null, {})
  }
};
