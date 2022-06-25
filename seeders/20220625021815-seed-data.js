"use strict";
const { faker } = require("@faker-js/faker");

module.exports = {
  async up(queryInterface, Sequelize) {
    const userList = [];

    let users = await queryInterface.bulkInsert("users", userList, {
      returning: true,
    });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("users", null);
  },
};
