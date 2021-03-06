const app = require('./api/app')
const sequelize = require('./database/src/index')

const port = 4000

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
