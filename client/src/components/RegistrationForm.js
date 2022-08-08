import React, {useCallback, useContext, useState} from 'react'
import DefaultLayout from '../layouts/DefaultLayout'
import UserService from '../services/UserService'
import {useNavigate} from 'react-router-dom'
import {NotificationContext} from '../context/NotificationContext'

const userService = new UserService()

function RegistrationForm() {
	const {toggleAlert} = useContext(NotificationContext)
	const [user, setUser] = useState({
		name: '',
		email: '',
		password: '',
		confirmPassword: '',
	})
	const navigate = useNavigate()

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

	const clickHandler = useCallback(async () => {
		const data = await userService.register(user)
		if (data.status !== 200) {
			toggleAlert(data.message)
		} else {
			navigate('/login')
		}
		return
	}, [navigate, user, toggleAlert])

	return (
		<DefaultLayout>
			<div className='register-box'>
				<div>
					<input className='input-field' type='text' name='name' placeholder='Name' onChange={populateFields} />
				</div>
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
					<input
						className='input-field'
						type='password'
						name='confirmPassword'
						placeholder='Confirm Password'
						onChange={populateFields}
					/>
				</div>
				<div>
					<button className='main-button' onClick={clickHandler}>
						Register
					</button>
				</div>
			</div>
		</DefaultLayout>
	)
}

export default RegistrationForm
