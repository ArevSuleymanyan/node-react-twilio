import {useCallback, useState} from 'react'

function Phone() {
	const [phoneNumber, setPhoneNumber] = useState('')

	const onClick = useCallback(e => {
		e.preventDefault()
		let value = e.target.innerText
		setPhoneNumber(p => (p += value))
	}, [])
	const callHandler = useCallback(() => {})
	return (
		<div className='phone-container'>
			<div className='phone-input-box'>
				<p className='phone-number-input'>{phoneNumber}</p>
			</div>

			<div>
				<button className='phone-button' onClick={onClick}>
					1
				</button>
				<button className='phone-button' onClick={onClick}>
					2
				</button>
				<button className='phone-button' onClick={onClick}>
					3
				</button>
			</div>
			<div>
				<button className='phone-button' onClick={onClick}>
					4
				</button>
				<button className='phone-button' onClick={onClick}>
					5
				</button>
				<button className='phone-button' onClick={onClick}>
					6
				</button>
			</div>
			<div>
				<button className='phone-button' onClick={onClick}>
					7
				</button>
				<button className='phone-button' onClick={onClick}>
					8
				</button>
				<button className='phone-button' onClick={onClick}>
					9
				</button>
			</div>
			<div>
				<button className='phone-button' onClick={onClick}>
					*
				</button>
				<button className='phone-button' onClick={onClick}>
					0
				</button>
				<button className='phone-button' onClick={onClick}>
					#
				</button>
			</div>
			<div>
				<button className='phone-button green' onClick={callHandler}>
					Call
				</button>
			</div>
		</div>
	)
}

export default Phone
