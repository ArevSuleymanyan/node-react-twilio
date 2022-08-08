import React, {useContext} from 'react'
import {NotificationContext} from '../context/NotificationContext'

function Alert() {
	const {message, toggleAlert} = useContext(NotificationContext)

	return (
		<>
			{message && (
				<div className='alert-container' onClick={() => toggleAlert('')}>
					{message}
				</div>
			)}
		</>
	)
}

export default Alert
