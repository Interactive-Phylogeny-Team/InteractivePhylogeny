require('dotenv').config()

module.exports = {
	env: {
		username: process.env.DB_USERNAME,
		password: process.env.DB_PASSWORD,
		database: process.env.DB_NAME,
		port: process.env.DB_PORT,
		host: '127.0.0.1',
		dialect: 'postgres'
	}
}