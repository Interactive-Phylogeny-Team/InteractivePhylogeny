const express = require('express')
const cors = require('cors')
const Sequelize = require('sequelize')

initDatabase()

const app = express()
const port = 4000

const corsOptions = {
	origin: 'http://localhost:3000',
	credentials: true,
	optionSuccessStatus: 200
}

app.use(cors(corsOptions))
app.get('/', (req, res) => {
	res.setHeader("Access-Control-Allow-Origin", "*");
	res.setHeader("Access-Control-Allow-Credentials", "true");
	res.setHeader("Access-Control-Allow-Headers", "content-type");
	res.setHeader( "Access-Control-Allow-Methods", "PUT, POST, GET, DELETE, PATCH, OPTIONS");
	res.send('This is the backend')
})

app.listen(port, () => {
	console.log(`Backend server listening at ${port}`)
})

async function initDatabase() {
	const sequelize = new Sequelize(database='appdb', username='appuser', password='b', options={
		host: 'localhost',
		port: '5432',
		dialect: 'postgres'
	});

	try {
		await sequelize.authenticate();
		console.log('Connection to database has successfully been authenticated');
	} catch (error) {
		console.error('FAILED TO AUTHENTICATE DATABASE:');
		throw error
	}
}
