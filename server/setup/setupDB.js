const {mongoose} = require('mongoose')

const setupDB = async () => {
	await mongoose.connect(process.env.MONGODB_URI, {
		useNewUrlParser: true,
	})
}

module.exports = {setupDB}
