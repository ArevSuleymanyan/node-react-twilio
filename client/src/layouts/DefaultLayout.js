import React from 'react'
import Navbar from '../components/Navbar'

function DefaultLayout({children}) {
	return (
		<>
			<Navbar />
			{children}
		</>
	)
}

export default DefaultLayout
