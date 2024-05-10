import './index.scss'
import Loader from 'react-loaders'
import AnimatedLetters from '../AnimatedLetters'
import { useEffect, useState } from 'react'
import portfolioData from '../../data/portfolio.json'

const portfolioNameArray = 'Portfolio'

const Portfolio = () => {
	const [letterClass, setLetterClass] = useState('text-animate')

	useEffect(() => {
		const timer = setTimeout(() => {
			setLetterClass('text-animate-hover')
		}, 3000)

		return () => {
			clearTimeout(timer)
		}
	}, [])

	const renderPortfolio = (portfolio) => {
		return (
			<div className='images-container'>
				{portfolio.map((project, i) => {
					const { img, title, desc, url } = project

					return (
						<div key={i} className='image-box'>
							<img src={img} alt={title} className='portfolio-image' />
							<div className='content'>
								<p className='title'>{title}</p>
								<h4 className='description'>{desc}</h4>
								<button className='btn-view' onClick={() => window.open(url)}>
									View
								</button>
								{/* <a href={url} target='_blank'>
									View
								</a> */}
							</div>
						</div>
					)
				})}
			</div>
		)
	}

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
				<div>{renderPortfolio(portfolioData.portfolio)}</div>
			</div>
			<Loader type='pacman' />
		</>
	)
}

export default Portfolio
