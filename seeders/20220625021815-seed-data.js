"use strict";
const { faker } = require("@faker-js/faker");

module.exports = {
  async up(queryInterface, Sequelize) {
    const userList = [];

    for (let i = 0; i < 100; i++) {
      const sizeArr = ["S", "M", "L"];
      userList.push({
        first_name: faker.name.firstName(),
        last_name: faker.name.lastName(),
        email: faker.internet.email(),
        birthday: faker.date.birthdate({ min: 18, max: 40, mode: "age" }),
        gender: faker.name.gender(),
        shirt_size: sizeArr[Math.floor(Math.random() * sizeArr.length)],
        net_worth: Math.floor(Math.random() * 1000000),
        created_at: new Date(),
        updated_at: new Date(),
      });
    }

    let users = await queryInterface.bulkInsert("users", userList, {
      returning: true,
    });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("users", null);
  },
};
