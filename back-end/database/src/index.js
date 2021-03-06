const Sequelize = require('sequelize')

const sequelize = new Sequelize(database='appdb', username='appuser', password='b', options={
	host: 'localhost',
	port: '5432',
	dialect: 'postgres'
});

module.exports = sequelize
