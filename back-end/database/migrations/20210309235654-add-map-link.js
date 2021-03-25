'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.addColumn('Species', 'mapLink', {
      type: Sequelize.STRING(500),
      allowNull: false
    })
  },
  down: async (queryInterface) => {
    await queryInterface.removeColumn('Species', 'mapLink')
  }
};
