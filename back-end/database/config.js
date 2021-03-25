require('dotenv').config()

let dbName

if (process.env.NODE_ENV === 'test') {
	dbName = process.env.TEST_DB_NAME
} else {
	dbName = process.env.DB_NAME
}

module.exports = {
	env: {
		username: process.env.DB_USERNAME,
		password: process.env.DB_PASSWORD,
		database: dbName,
		port: process.env.DB_PORT,
		host: '127.0.0.1',
		dialect: 'postgres'
	}
}