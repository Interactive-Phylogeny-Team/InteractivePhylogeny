'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Species', {
      name: {
        type: Sequelize.STRING,
        unique: true,
        allowNull: false
      },
      imageUrl : {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true
      },
      dnaSequences: {
        type: Sequelize.ARRAY(Sequelize.CITEXT),
        allowNull: false
      }
    })
  },
  down: async (queryInterface) => {
    await queryInterface.dropTable('Species')
  }
}
