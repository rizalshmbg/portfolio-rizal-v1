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
	const firstNameArray = 'izal'
	const lastNameArray = 'ihombing,'
	const jobArray = 'Jr. Web Developer.'

	useEffect(() => {
		const timer = setTimeout(() => {
			setLetterClass('text-animate-hover')
		}, 4000)

		return () => {
			clearTimeout(timer)
		}
	}, [])

	return (
		<>
			<div className='container home-page'>
				<div className='text-zone'>
					<h1>
						<span className={letterClass}>H</span>
						<span className={`${letterClass} _12`}>i</span>
						<span className={`${letterClass} _13`}>!</span>
						<br />
						<span className={`${letterClass} _14`}>I</span>
						<span className={`${letterClass} _15`}>&#39;</span>
						<span className={`${letterClass} _16`}>m</span>

						{/* LOGO R */}
						<img src={LogoR} alt='Logo-R' className='logo-R' />
						<AnimatedLetters
							letterClass={letterClass}
							strArray={firstNameArray.split('')}
							idx={17}
						/>

						{/* LOGO S */}
						<img src={LogoS} alt='Logo-S' className='logo-S' />
						<AnimatedLetters
							letterClass={letterClass}
							strArray={lastNameArray.split('')}
							idx={21}
						/>

						<br />
						<AnimatedLetters
							letterClass={letterClass}
							strArray={jobArray.split('')}
							idx={23}
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
