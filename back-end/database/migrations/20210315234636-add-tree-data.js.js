'use strict';

module.exports = {
  up: async (queryInterface) => {
    const treeDataFiles = [
      '../../data/birdsTree.json',
      '../../data/butterfliesTree.json',
      '../../data/primatesTree.json'
    ]

    for (const treeDataFile of treeDataFiles) {
      const treeData = require(treeDataFile)
      await queryInterface.bulkInsert('Trees', treeData)
    }
  },

  down: async (queryInterface) => {
    await queryInterface.bulkDelete('Trees', {})
  }
};
