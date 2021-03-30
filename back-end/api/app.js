const express = require('express')
const cors = require('cors')
const router = require('./router')
const bodyParser = require('body-parser')
require('dotenv').config()

const app = express()

const corsOptions = {
	origin: `http://localhost:${process.env.FRONT_END_PORT}`,
	// origin: `http://localhost:62121`,
	credentials: true,
	optionSuccessStatus: 200
}

app.use(cors(corsOptions))
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
app.use('/', router)

module.exports = app