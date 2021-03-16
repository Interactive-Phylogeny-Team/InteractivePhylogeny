'use strict';

module.exports = {
  up: async (queryInterface) => {
    const treeData = require('../../data/trees.json')
    await queryInterface.bulkInsert('Trees', treeData)
  },

  down: async (queryInterface) => {
    await queryInterface.bulkDelete('Trees', {})
  }
};
