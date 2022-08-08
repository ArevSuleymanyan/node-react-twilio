const express = require('express')
const cors = require('cors')
const app = express()

const setupExpress = () => {
	app.use(express.urlencoded({extended: false}))
	app.use(express.json())
	app.use(cors())
	return app
}
module.exports = {setupExpress}
