import './index.scss'
import Loader from 'react-loaders'
import AnimatedLetters from '../AnimatedLetters'
import { useEffect, useState } from 'react'
import { getDocs, collection } from 'firebase/firestore'
import { db } from '../../firebase'

const portfolioNameArray = 'Portfolio'

const Portfolio = () => {
	const [letterClass, setLetterClass] = useState('text-animate')
	const [portfolio, setPortfolio] = useState([])

	const getPortfolio = async () => {
		const querySnapshot = await getDocs(collection(db, 'portfolio'))
		setPortfolio(querySnapshot.docs.map((doc) => doc.data()))
	}

	const renderPortfolio = (portfolio) => {
		return (
			<div className='images-container'>
				{portfolio.map((project, i) => {
					const { image, title, desc, url } = project

					return (
						<div key={i} className='image-box'>
							<img src={image} alt={title} className='portfolio-image' />
							<div className='content'>
								<p className='title'>{title}</p>
								<h4 className='description'>{desc}</h4>
								<button className='btn-view' onClick={() => window.open(url)}>
									View
								</button>
							</div>
						</div>
					)
				})}
			</div>
		)
	}

	useEffect(() => {
		const timer = setTimeout(() => {
			setLetterClass('text-animate-hover')
		}, 3000)

		return () => {
			clearTimeout(timer)
		}
	}, [])

	useEffect(() => {
		getPortfolio()
	}, [])

	return (
		<>
			<div className='container portfolio-page'>
				<h1 className='page-title'>
					<AnimatedLetters
						idx={15}
						letterClass={letterClass}
						strArray={portfolioNameArray.split('')}
					/>
				</h1>
				<div>{renderPortfolio(portfolio)}</div>
			</div>
			<Loader type='pacman' />
		</>
	)
}

export default Portfolio
