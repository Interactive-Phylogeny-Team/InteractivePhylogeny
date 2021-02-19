const Sequelize = require('sequelize')

const sequelize = new Sequelize(database='appdb', username='appuser', password='b', options={
	host: 'localhost',
	port: '5432',
	dialect: 'postgres'
});

async function checkDatabaseConnection() {
	try {
		await sequelize.authenticate();
		console.log('Connection to database has successfully been authenticated');
	} catch (error) {
		console.error('FAILED TO AUTHENTICATE DATABASE:');
		throw error
	}
}

module.exports = {
	sequelize: sequelize,
	checkDatabaseConnection: checkDatabaseConnection
}