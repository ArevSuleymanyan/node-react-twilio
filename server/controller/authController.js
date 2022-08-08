const {validate} = require('../helper/email-validation')
const {UserService} = require('../service/UserService')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')

const userService = new UserService()

const checkRegistration = async data => {
	for (const key in data) {
		if (!data[key]) {
			return {message: 'Fill the all fields', status: 403}
		}
	}
	if (data.password !== data.confirmPassword) {
		return {message: 'Passwords do not match', status: 403}
	}
	if (!validate(data.email)) {
		return {message: 'Invalid email', status: 403}
	}
	if (data.password.length <= 4) {
		return {message: 'The Password is too short', status: 403}
	}
	const matchingEmails = await userService.findByEmail(data.email)

	if (matchingEmails) {
		return {message: 'That email is already in use', status: 403}
	}
	const hash = await bcrypt.hash(data.password, 10)
	data.password = hash
	delete data.confirmPassword

	const user = await userService.create(data)
	return {message: `${user.name} registered! Please log in.`, status: 200}
}

const checkLogin = async data => {
	for (const key in data) {
		if (!data[key]) {
			return {message: 'Fill the all fields', status: 400}
		}
	}
	if (!validate(data.email)) {
		return {message: 'Invalid email', status: 403}
	}
	const matchingUser = await userService.findByEmail(data.email)

	if (!matchingUser) {
		return {message: 'Email or password incorrect', status: 403}
	}
	const comparePassword = await bcrypt.compare(data.password, matchingUser.password)

	if (!comparePassword) {
		return {message: 'Email or password incorrect', status: 403}
	}
	const jwtToken = jwt.sign({email: data.email}, process.env.JWT_SECRET, {
		expiresIn: process.env.EXPIRES_IN,
	})

	return {
		jwtToken,
		name: matchingUser.name,
		email: matchingUser.email,
		status: 200,
	}
}

const registrationController = async (req, res) => {
	const data = req.body || {}
	const {message, status} = await checkRegistration(data)
	res.status(status).json({message, status})
}

const loginController = async (req, res) => {
	const data = req.body || {}
	const {status, ...rest} = await checkLogin(data)
	res.status(status).json({...rest, status})
}

module.exports = {
	registrationController,
	loginController,
}
