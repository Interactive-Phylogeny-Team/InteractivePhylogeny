const express = require('express')
const cors = require('cors')
const router = require('./router')
const bodyParser = require('body-parser')

const app = express()

const corsOptions = {
	origin: 'http://localhost:3000',
	credentials: true,
	optionSuccessStatus: 200
}

app.use(cors(corsOptions))
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
app.use('/', router)

module.exports = app