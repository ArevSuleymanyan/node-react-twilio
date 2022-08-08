require('dotenv').config()
const {router} = require('./router/index')
const {checkAuthorization} = require('./middleware/checkAuthorization')
const {setupExpress} = require('./setup/setupExpress')
const {setupDB} = require('./setup/setupDB')

const app = setupExpress()

setupDB().then(() => {
	app.listen(process.env.PORT, () => {
		console.log('Listening')
	})
})

app.use(checkAuthorization)
app.use('/', router)
