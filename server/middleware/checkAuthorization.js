const {UserService} = require('../service/UserService')
const jwt = require('jsonwebtoken')

const checkURL = ['/api/login', '/api/register']
const userService = new UserService()

const checkAuthorization = async (req, res, next) => {
	const check = checkURL.find(url => req.url === url)
	if (check) {
		next()
		return
	}
	const jwtToken = req.headers.jwttoken
	if (!jwtToken) {
		return res.json({message: 'Token is missing'})
	}
	const verifyToken = await jwt.verify(jwtToken, process.env.JWT_SECRET)
	if (!verifyToken) {
		return res.json({message: 'Invalid token'})
	}
	const {email} = verifyToken
	const user = await userService.findByEmail(email)
	if (!user) {
		return res.json({message: 'Please login again'})
	}

	req.user = {name: user.name, email: user.email}
	next()
}

module.exports.checkAuthorization = checkAuthorization
