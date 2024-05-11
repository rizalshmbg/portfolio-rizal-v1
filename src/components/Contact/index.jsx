import emailjs from '@emailjs/browser'
import { useEffect, useRef, useState } from 'react'
import Loader from 'react-loaders'
import AnimatedLetters from '../AnimatedLetters'
import './index.scss'
import { MapContainer, TileLayer } from 'react-leaflet'

const contactNameArray = 'Contact'
const position = [-6.9147444, 107.6098111]

const Contact = () => {
	const [letterClass, setLetterClass] = useState('text-animate')
	const refForm = useRef()

	const handleSendEmail = async (e) => {
		e.preventDefault()

		try {
			await emailjs.sendForm(
				`${import.meta.env.VITE_EMAILJS_SERVICE_ID}`,
				`${import.meta.env.VITE_EMAILJS_TEMPLATE_ID}`,
				refForm.current,
				{
					publicKey: `${import.meta.env.VITE_EMAILJS_PUBLIC_KEY}`,
				}
			)
			alert('Message successfully sent!')
			window.location.reload(false)
		} catch (error) {
			alert('Failed to send the message, please try again')
			console.log(error)
		}
	}

	useEffect(() => {
		const timer = setTimeout(() => {
			setLetterClass('text-animate-hover')
		}, 3000)

		return () => {
			clearTimeout(timer)
		}
	}, [])

	return (
		<>
			<div className='container contact-page'>
				<div className='text-zone'>
					<h1>
						<AnimatedLetters
							strArray={contactNameArray.split('')}
							letterClass={letterClass}
							idx={15}
						/>
					</h1>
					<p>
						I am interested in freelance opportunities - especially on ambitious
						or large projects. However, if you have any other requests or
						questions, don&#39;t hesitate to contact me using below form either.
					</p>
					<div className='contact-form'>
						<form ref={refForm} onSubmit={handleSendEmail}>
							<ul>
								<li className='half'>
									<input
										type='text'
										name='name'
										id='name'
										placeholder='Name'
										required
									/>
								</li>
								<li className='half'>
									<input
										type='email'
										name='email'
										id='email'
										placeholder='Email'
										required
									/>
								</li>
								<li>
									<input
										type='text'
										name='subject'
										id='subject'
										placeholder='Subject'
										required
									/>
								</li>
								<li>
									<textarea
										name='message'
										id='message'
										placeholder='Message'
										required
									></textarea>
								</li>
								<li>
									<input type='submit' value='SEND' className='flat-button' />
								</li>
							</ul>
						</form>
					</div>
				</div>
				<div className='info-map'>
					Rizal Sihombing,
					<br />
					Bandung, West Java, Indonesia.
					<br />
					<span>sihombingrizal18@gmail.com</span>
				</div>
				<div className='map-wrap'>
					<MapContainer center={position} zoom={13}>
						<TileLayer url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png' />
					</MapContainer>
				</div>
			</div>
			<Loader type='pacman' />
		</>
	)
}

export default Contact
