import React, {useCallback, useState} from 'react'

export const NotificationContext = React.createContext({})

const NotificationProvider = ({children}) => {
	const [message, setMessage] = useState('')
	const toggleAlert = useCallback(value => {
		setMessage(value)
	}, [])

	return (
		<NotificationContext.Provider
			value={{
				message,
				toggleAlert,
			}}
		>
			{children}
		</NotificationContext.Provider>
	)
}

export default NotificationProvider
