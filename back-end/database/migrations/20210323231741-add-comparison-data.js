'use strict';

module.exports = {
  up: async (queryInterface) => {
    const comparisonFiles = [
      '../../data/birdsComparisons.json',
      '../../data/butterfliesComparisons.json',
      '../../data/primatesComparisons.json'
    ]

    for (const comparisonFile of comparisonFiles) {
      const comparisons = require(comparisonFile)
      await queryInterface.bulkInsert('Comparisons', comparisons)
    }
  },

  down: async (queryInterface) => {
    await queryInterface.bulkDelete('Comparisons', {})
  }
}
