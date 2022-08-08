import React, {useCallback, useContext} from 'react'
import LocalStorageService from '../services/LocalStorageService'
import {Navigate, useNavigate} from 'react-router-dom'
import Phone from './Phone'
import {UserContext} from '../context/UserContext'

function Dashboard() {
	const jwtToken = LocalStorageService.getToken('jwtToken')
	const navigate = useNavigate()
	const {user} = useContext(UserContext)
	const logoutHandler = useCallback(() => {
		LocalStorageService.removeToken('jwtToken')
		navigate('/login')
	}, [])
	return (
		<>
			{jwtToken ? (
				<div>
					<div className='log-out-row'>
						<p className='account-user'>{user.name}</p>
						<button className='main-button' onClick={logoutHandler}>
							Log out
						</button>
					</div>
					<hr />
					<div>
						<Phone />
					</div>
				</div>
			) : (
				<Navigate replace to='/login' />
			)}
		</>
	)
}

export default Dashboard
