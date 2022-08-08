import React, {useState, useCallback, useContext} from 'react'
import DefaultLayout from '../layouts/DefaultLayout'
import UserService from '../services/UserService'
import {useNavigate} from 'react-router-dom'
import LocalStorageService from '../services/LocalStorageService'
import {UserContext} from '../context/UserContext'
import {NotificationContext} from '../context/NotificationContext'

const userService = new UserService()

function LoginForm() {
	const {toggleAlert} = useContext(NotificationContext)
	const [user, setUser] = useState({
		email: '',
		password: '',
	})
	const navigate = useNavigate()
	const {changeUserContext} = useContext(UserContext)
	const populateFields = useCallback(e => {
		let key = e.target.name
		let value = e.target.value
		setUser(prevState => {
			return {
				...prevState,
				[key]: value,
			}
		})
	}, [])

	const clickHandler = useCallback(
		async e => {
			e.preventDefault()

			const data = await userService.login(user)
			if (data.status !== 200) {
				toggleAlert(data.message)
			} else {
				if (data.jwtToken) {
					LocalStorageService.setToken('jwtToken', data.jwtToken)
					changeUserContext(data.user, data.email)
				}
				navigate('/')
			}
		},
		[navigate, user, changeUserContext, toggleAlert]
	)
	return (
		<DefaultLayout>
			<div className='login-box'>
				<div>
					<input className='input-field' type='email' name='email' placeholder='Email' onChange={populateFields} />
				</div>
				<div>
					<input
						className='input-field'
						type='password'
						name='password'
						placeholder='Password'
						onChange={populateFields}
					/>
				</div>
				<div>
					<button className='main-button' onClick={clickHandler}>
						Login
					</button>
				</div>
			</div>
		</DefaultLayout>
	)
}

export default LoginForm
