import { Link, NavLink } from 'react-router-dom'
import './index.scss'
import LogoRS from '../../assets/images/logo-rs.png'
import LogoSubRizal from '../../assets/images/logo_sub_rizal.png'
import LogoSubSihombing from '../../assets/images/logo_sub_sihombing.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
	faEnvelope,
	faHome,
	faSuitcase,
	faUser,
} from '@fortawesome/free-solid-svg-icons'
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'

const Sidebar = () => {
	return (
		<div className='nav-bar'>
			<Link className='logo' to='/'>
				<img src={LogoRS} alt='logo-rs' className='logo-rs' />
				<img src={LogoSubRizal} className='sub-logo' alt='logo-subtitle-1' />
				<img
					src={LogoSubSihombing}
					className='sub-logo'
					alt='logo-subtitle-1'
				/>
			</Link>
			<nav>
				<NavLink exact='true' activeclassname='active' to='/'>
					<FontAwesomeIcon icon={faHome} color='#4d4d4e' />
				</NavLink>
				<NavLink
					exact='true'
					activeclassname='active'
					className='about-link'
					to='/about'
				>
					<FontAwesomeIcon icon={faUser} color='#4d4d4e' />
				</NavLink>
				<NavLink
					exact='true'
					activeclassname='active'
					className='portfolio-link'
					to='/portfolio'
				>
					<FontAwesomeIcon icon={faSuitcase} color='#4d4d4e' />
				</NavLink>
				<NavLink
					exact='true'
					activeclassname='active'
					className='contact-link'
					to='/contact'
				>
					<FontAwesomeIcon icon={faEnvelope} color='#4d4d4e' />
				</NavLink>
			</nav>
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
		</div>
	)
}
export default Sidebar
