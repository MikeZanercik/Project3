'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Fields', [{
      name: "Field 1"
    },
    {
      name: "Field 2"
    },
    {
      name: "Field 3"
    },
    {
      name: "Field 4"
    },
    {
      name: "Field 5"
    },
    {
      name: "Field 6"
    },
    {
      name: "Field 7"
    },
    {
      name: "Field 8"
    },
    {
      name: "Field 9"
    }
  ], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Fields', null, {});
  }
};