import RegistrationForm from './components/RegistrationForm'
import LoginForm from './components/LoginForm'
import {Routes, Route} from 'react-router-dom'
import Dashboard from './components/Dashboard'
import Alert from './components/Alert'

function App() {
	return (
		<div className='main-container'>
			<Routes>
				<Route path='/register' element={<RegistrationForm />} />
				<Route path='/login' element={<LoginForm />} />
				<Route path='/' element={<Dashboard />} />
			</Routes>
			<Alert />
		</div>
	)
}

export default App
