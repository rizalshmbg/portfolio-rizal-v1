import { Link, NavLink } from 'react-router-dom'
import './index.scss'
import LogoRS from '../../assets/images/logo-rs.png'
import LogoSubRizal from '../../assets/images/logo_sub_rizal.png'
import LogoSubSihombing from '../../assets/images/logo_sub_sihombing.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
	faBars,
	faClose,
	faEnvelope,
	faHome,
	faSuitcase,
	faUser,
} from '@fortawesome/free-solid-svg-icons'
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { useState } from 'react'

const Sidebar = () => {
	const [showNav, setShowNav] = useState(false)

	return (
		<div className='nav-bar'>
			{/* LOGO */}
			<Link className='logo' to='/'>
				<img src={LogoRS} alt='logo-rs' className='logo-rs' />
				<img src={LogoSubRizal} className='sub-logo' alt='logo-subtitle-1' />
				<img
					src={LogoSubSihombing}
					className='sub-logo'
					alt='logo-subtitle-1'
				/>
			</Link>

			{/* NAVBAR */}
			<nav className={showNav ? 'mobile-show' : ''}>
				{/* HOME */}
				<NavLink
					exact='true'
					activeclassname='active'
					to='/'
					onClick={() => setShowNav(false)}
				>
					<FontAwesomeIcon icon={faHome} color='#4d4d4e' />
				</NavLink>

				{/* ABOUT */}
				<NavLink
					onClick={() => setShowNav(false)}
					exact='true'
					activeclassname='active'
					className='about-link'
					to='/about'
				>
					<FontAwesomeIcon icon={faUser} color='#4d4d4e' />
				</NavLink>

				{/* PORTFOLIO */}
				<NavLink
					onClick={() => setShowNav(false)}
					exact='true'
					activeclassname='active'
					className='portfolio-link'
					to='/portfolio'
				>
					<FontAwesomeIcon icon={faSuitcase} color='#4d4d4e' />
				</NavLink>

				{/* CONTACT */}
				<NavLink
					onClick={() => setShowNav(false)}
					exact='true'
					activeclassname='active'
					className='contact-link'
					to='/contact'
				>
					<FontAwesomeIcon icon={faEnvelope} color='#4d4d4e' />
				</NavLink>

				{/* CLOSE HAMBURGER */}
				<FontAwesomeIcon
					onClick={() => setShowNav(false)}
					icon={faClose}
					color='#ffd700'
					size='3x'
					className='close-icon'
				/>
			</nav>

			{/* LINKEDIN */}
			<ul>
				<li>
					<a
						href='https://www.linkedin.com/in/rizalsihombing/'
						target='_blank'
						rel='noopener noreferrer'
					>
						<FontAwesomeIcon icon={faLinkedin} color='#4d4d4e' />
					</a>
				</li>

				{/* GITHUB */}
				<li>
					<a
						href='https://github.com/rizalshmbg'
						target='_blank'
						rel='noopener noreferrer'
					>
						<FontAwesomeIcon icon={faGithub} color='#4d4d4e' />
					</a>
				</li>
			</ul>

			{/* HAMBURGER */}
			<FontAwesomeIcon
				onClick={() => setShowNav(true)}
				icon={faBars}
				color='#ffd700'
				size='3x'
				className='hamburger-icon'
			/>
		</div>
	)
}
export default Sidebar
