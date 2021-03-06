const Sequelize = require('sequelize')
const dbConfig = require('../config').env

const sequelize = new Sequelize(dbConfig.database, dbConfig.username, dbConfig.password, dbConfig)

module.exports = sequelize
