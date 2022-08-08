import React, {useCallback, useEffect, useState} from 'react'
import UserService from '../services/UserService'
import LocalStorageService from '../services/LocalStorageService'

export const UserContext = React.createContext({})

const userService = new UserService()

const UserProvider = ({children}) => {
	const [user, setUser] = useState({})
	const jwtToken = LocalStorageService.getToken('jwtToken')
	const changeUserContext = useCallback((name, email) => {
		setUser(prev => {
			return {name, email}
		})
	}, [])

	useEffect(() => {
		const getUserInfo = async () => {
			if (jwtToken) {
				await userService.getUser().then(result => {
					setUser(result)
				})
			}
		}
		getUserInfo()
	}, [jwtToken])

	return (
		<UserContext.Provider
			value={{
				user,
				changeUserContext,
			}}
		>
			{children}
		</UserContext.Provider>
	)
}

export default UserProvider
