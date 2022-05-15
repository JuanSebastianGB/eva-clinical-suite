'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    const services = [
      {
        name: "Urgencias",
        campus_id: 1
      },
      {
        name: "Hospitalizacion cirugia",
        campus_id: 1
      },
      {
        name: "Sala de operaciones",
        campus_id: 1
      },
      {
        name: "Imagenes diagnosticas",
        campus_id: 1
      },
      {
        name: "Oftalmologia",
        campus_id: 1
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
    await queryInterface.bulkDelete('Services', null, {});

  }
};
