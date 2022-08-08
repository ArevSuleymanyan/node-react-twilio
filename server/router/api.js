const {Router} = require('express')
const {loginController, registrationController} = require('../controller/authController')

const router = new Router()

router.post('/login', loginController)
router.post('/register', registrationController)

router.get('/user', async (req, res) => {
	res.status(200).json(req.user)
})

module.exports = {apiRouter: router}
