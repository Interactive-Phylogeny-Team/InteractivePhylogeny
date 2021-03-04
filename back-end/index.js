const express = require('express')
const cors = require('cors')
const {checkDatabaseConnection} = require('./database/src')
const router = require('./api/router')
const bodyParser = require('body-parser')

checkDatabaseConnection()

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

app.use('/', router)
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.listen(port, () => {
	console.log(`Backend server listening at ${port}`)
})

module.exports = app