'use strict';

module.exports = {
  up: async (queryInterface) => {
    const speciesData = require('../../data/species.json')
    await queryInterface.bulkInsert('Species', speciesData)
  },

  down: async (queryInterface) => {
    await queryInterface.bulkDelete('Species', {})
  }
};
