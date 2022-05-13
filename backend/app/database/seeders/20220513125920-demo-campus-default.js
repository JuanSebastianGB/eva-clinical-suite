'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    const campuses = [
      { name: "Sede Principal" },
      { name: "Sede Norte" }
    ]
    await queryInterface.bulkInsert('Campuses', campuses, {});
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
