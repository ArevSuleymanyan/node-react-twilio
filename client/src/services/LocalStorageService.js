class LocalStorageService {
	static getToken(token) {
		return localStorage.getItem(token)
	}
	static setToken(token, value) {
		return localStorage.setItem(token, value)
	}
	static removeToken(token) {
		return localStorage.removeItem(token)
	}
}

export default LocalStorageService
