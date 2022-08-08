import {Link, useLocation} from 'react-router-dom'

function Navbar() {
	const location = useLocation()
	const pathname = location.pathname
	return (
		<nav className='navbar'>
			<div className={`${pathname === '/register' ? 'nav-checked' : ''}`}>
				<Link className='navbar-link' to='/register'>
					Register
				</Link>
			</div>
			<div className={`${pathname === '/login' ? 'nav-checked' : ''}`}>
				<Link className='navbar-link' to='/login'>
					Login
				</Link>
			</div>
		</nav>
	)
}

export default Navbar
