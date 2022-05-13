'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    const services = [
      {
        name: "Urgencias",
        campusId: 1
      },
      {
        name: "Hospitalizacion cirugia",
        campusId: 1
      },
      {
        name: "Sala de operaciones",
        campusId: 1
      },
      {
        name: "Imagenes diagnosticas",
        campusId: 1
      },
      {
        name: "Oftalmologia",
        campusId: 1
      },
    ]
    await queryInterface.bulkInsert('Services', services, {});
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
