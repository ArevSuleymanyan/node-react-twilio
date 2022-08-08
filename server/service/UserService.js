const {BaseService} = require('./BaseService')
const {User} = require('../schema/user')

class UserService extends BaseService {
	constructor() {
		super(User)
	}
}

module.exports = {UserService}
