import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import LogoTitle from '../../assets/images/logo-s.png'
import AnimatedLetters from '../AnimatedLetters'
import Logo from './Logo'
import './index.scss'

const Home = () => {
	const [letterClass, setLetterClass] = useState('text-animate')
	const firstNameArray = ['R', 'i', 'z', 'a', 'l']
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
					{/* <span className={`${letterClass} _17`}>&nbsp;</span> */}
					{/* <AnimatedLetters
						letterClass={letterClass}
						strArray={firstNameArray}
						idx={18}
					/> */}
					<img src={LogoTitle} alt='Logo' />
					<AnimatedLetters
						letterClass={letterClass}
						strArray={lastNameArray}
						idx={17}
					/>
					<br />
					<AnimatedLetters
						letterClass={letterClass}
						strArray={jobArray}
						idx={25}
					/>
				</h1>
				<h2>Fresh Graduate of BCS / Jr. Frontend Web Developer</h2>
				<Link to='/contact' className='flat-button'>
					CONTACT ME
				</Link>
			</div>
			<Logo />
		</div>
	)
}
export default Home
