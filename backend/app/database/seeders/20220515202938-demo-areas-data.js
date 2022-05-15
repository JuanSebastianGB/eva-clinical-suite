'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
    const areas = [
      { name: 'Cirugia Mujeres', service_id: 2 },
      { name: 'Cirugia Hombres', service_id: 2 },
      { name: 'Sala Ortopedia', service_id: 2 },
      { name: 'Neurocirugia', service_id: 2 }
    ];
    await queryInterface.bulkInsert('Areas', areas, {});
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete('Areas', null, {});

  }
};
