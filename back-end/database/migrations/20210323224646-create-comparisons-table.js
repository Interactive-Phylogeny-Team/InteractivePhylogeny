'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Comparisons', {
      key: {
        type: Sequelize.STRING,
        unique: true,
        allowNull: false,
        primaryKey: true
      },
      compStrings: {
        type: Sequelize.ARRAY(Sequelize.STRING),
        allowNull: false
      }
    })
  },

  down: async (queryInterface) => {
    await queryInterface.dropTable('Comparisons');
  }
}
