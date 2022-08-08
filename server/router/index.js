const {Router} = require('express')
const router = new Router()
const {apiRouter} = require('./api')

router.use('/api', apiRouter)

module.exports = {router}
