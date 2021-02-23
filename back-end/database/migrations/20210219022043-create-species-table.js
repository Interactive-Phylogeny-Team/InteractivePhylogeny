'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Species', {
      name: {
        type: Sequelize.STRING,
        unique: true,
        allowNull: false
      },
      longitude: {
        type: Sequelize.FLOAT,
        allowNull: false
      },
      latitude: {
        type: Sequelize.FLOAT,
        allowNull: false
      },
      imageUrl : {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true
      },
      dnaSequence: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true
      }
    })
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Species')
  }
}
