import Loader from 'react-loaders'
import './index.scss'
import AnimatedLetters from '../AnimatedLetters'
import { useEffect, useState } from 'react'

const contactNameArray = ['C', 'o', 'n', 't', 'a', 'c', 't', ' ', 'M', 'e']

const Contact = () => {
	const [letterClass, setLetterClass] = useState('text-animate')

	useEffect(() => {
		setTimeout(() => {
			setLetterClass('text-animate-hover')
		}, 3000)
	}, [])

	return (
		<>
			<div className='container contact-page'>
				<div className='text-zone'>
					<h1>
						<AnimatedLetters
							strArray={contactNameArray}
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
						<form>
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
			</div>
			<Loader type='pacman' />
		</>
	)
}

export default Contact
