const app = require('./api/app')
const sequelize = require('./database/src/index')
require('dotenv').config()

const port = process.env.BACK_END_PORT

app.listen(port, async () => {
	try {
		await sequelize.authenticate();
		console.log('Connection to database has successfully been authenticated');
	} catch (error) {
		console.error('FAILED TO AUTHENTICATE DATABASE:');
		throw error
	}

	console.log(`Backend server listening at ${port}`)
})
