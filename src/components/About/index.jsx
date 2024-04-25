import AnimatedLetters from '../AnimatedLetters'
import './index.scss'

const aboutNameArray = ['A', 'b', 'o', 'u', 't', ' ', 'M', 'e']

const About = () => {
	return (
		<div className='container about-page'>
			<div className='text-zone'>
				<h1>
					<AnimatedLetters strArray={aboutNameArray} idx={15} />
				</h1>
				<p>
					I&#39;m a very ambitious front-end developer looking for a role in an
					established IT company with the opportunity to work with the latest
					technologies on challenging and diverse projects.
				</p>
				<p>
					I&#39;m quiet confident, naturally curious, and perpetually working on
					improving my chops one design problem at a time.
				</p>
				<p>
					If I need to define myself in one sentence that would be a family
					person, father of a beautiful daughter, a sports fanatic, photography
					enthusiast, and tech-obsessed!!!
				</p>
			</div>
		</div>
	)
}

export default About
