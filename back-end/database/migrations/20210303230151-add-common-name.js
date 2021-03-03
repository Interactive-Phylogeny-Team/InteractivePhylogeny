'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.renameColumn('Species', 'name', 'scientificName')
    await queryInterface.addColumn('Species', 'commonName', {
      type: Sequelize.STRING
    })
  },

  down: async (queryInterface) => {
    await queryInterface.removeColumn('Species', 'commonName')
    await queryInterface.renameColumn('Species', 'scientificName', 'name')
  }
};
