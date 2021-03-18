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
        type: Sequelize.CITEXT,
        allowNull: false
      }
    })
  },
  down: async (queryInterface) => {
    await queryInterface.dropTable('Trees')
  }
}
