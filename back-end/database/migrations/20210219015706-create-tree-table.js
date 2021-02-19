'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Trees', {
      name: {
        type: Sequelize.STRING,
        allowNull: true,
        unique: true
      },
      tree: {
        type: Sequelize.BLOB,
        allowNull: false,
        unique: true
      }
    })
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Trees')
  }
}
