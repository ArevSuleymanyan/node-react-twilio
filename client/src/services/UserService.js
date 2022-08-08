import LocalStorageService from './LocalStorageService'

class UserService {
	login(user) {
		const url = 'http://localhost:3001/api/login'
		const requestOptions = {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
				Accept: 'application/json',
			},
			body: JSON.stringify(user),
		}
		return fetch(url, requestOptions).then(response => {
			return response.json()
		})
	}

	register(user) {
		const url = 'http://localhost:3001/api/register'
		const requestOptions = {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
				Accept: 'application/json',
			},
			body: JSON.stringify(user),
		}
		return fetch(url, requestOptions).then(response => {
			return response.json()
		})
	}
	getUser() {
		const url = `http://localhost:3001/api/user`
		const jwtToken = LocalStorageService.getToken('jwtToken')
		const requestOptions = {
			method: 'GET',
			headers: {
				'Content-Type': 'application/json',
				Accept: 'application/json',
				jwtToken,
			},
		}
		return fetch(url, requestOptions).then(response => {
			return response.json()
		})
	}
}

export default UserService
