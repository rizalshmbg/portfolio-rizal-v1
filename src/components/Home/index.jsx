import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import LogoS from '../../assets/images/logo-s.png'
import LogoR from '../../assets/images/logo-r.png'
import AnimatedLetters from '../AnimatedLetters'
import Logo from './Logo'
import './index.scss'
import Loader from 'react-loaders'

const Home = () => {
	const [letterClass, setLetterClass] = useState('text-animate')
	const firstNameArray = ['i', 'z', 'a', 'l']
	const lastNameArray = ['i', 'h', 'o', 'm', 'b', 'i', 'n', 'g']
	const jobArray = [
		'W',
		'e',
		'b',
		' ',
		'D',
		'e',
		'v',
		'e',
		'l',
		'o',
		'p',
		'e',
		'r',
	]

	useEffect(() => {
		setTimeout(() => {
			setLetterClass('text-animate-hover')
		}, 4000)
	}, [])

	return (
		<>
			<div className='container home-page'>
				<div className='text-zone'>
					<h1>
						<span className={letterClass}>H</span>
						<span className={`${letterClass} _12`}>i</span>
						<span className={`${letterClass} _13`}>,</span>
						<br />
						<span className={`${letterClass} _14`}>I</span>
						<span className={`${letterClass} _15`}>&#39;</span>
						<span className={`${letterClass} _16`}>m</span>
						{/* LOGO R */}
						<img src={LogoR} alt='Logo-R' className='logo-R' />
						<AnimatedLetters
							letterClass={letterClass}
							strArray={firstNameArray}
							idx={17}
						/>
						{/* LOGO S */}
						<img src={LogoS} alt='Logo-S' className='logo-S' />
						<AnimatedLetters
							letterClass={letterClass}
							strArray={lastNameArray}
							idx={21}
						/>
						<br />
						<AnimatedLetters
							letterClass={letterClass}
							strArray={jobArray}
							idx={27}
						/>
					</h1>
					<h2>Fresh Graduate of BCS / Jr. Frontend Web Developer</h2>
					<Link to='/contact' className='flat-button'>
						CONTACT ME
					</Link>
				</div>
				<Logo />
			</div>
			<Loader type='pacman' />
		</>
	)
}
export default Home
