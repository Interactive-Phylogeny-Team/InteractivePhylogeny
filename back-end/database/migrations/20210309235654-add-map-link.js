'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.addColumn('Species', 'mapLink', {
      type: Sequelize.STRING,
      allowNull: false
    })
  },
  down: async (queryInterface) => {
    await queryInterface.removeColumn('Species', 'mapLink')
  }
};
