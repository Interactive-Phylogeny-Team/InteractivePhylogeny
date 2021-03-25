'use strict';

module.exports = {
  up: async (queryInterface) => {
    const speciesDataFiles = [
      '../../data/birdsData.json',
      '../../data/butterfliesData.json',
      '../../data/primatesData.json'
    ]

    for (const speciesDataFile of speciesDataFiles) {
      const speciesData = require(speciesDataFile)
      await queryInterface.bulkInsert('Species', speciesData)
    }
  },

  down: async (queryInterface) => {
    await queryInterface.bulkDelete('Species', {})
  }
};
