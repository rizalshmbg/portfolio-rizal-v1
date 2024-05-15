import { useEffect, useRef } from 'react'
import gsap from 'gsap-trial'
import DrawSVGPlugin from 'gsap-trial/DrawSVGPlugin'
import LogoR from '../../../assets/images/logo-r.png'
import LogoS from '../../../assets/images/logo-s.png'
import './index.scss'

gsap.registerPlugin(DrawSVGPlugin)

const Logo = () => {
	const bgRef = useRef()
	const outlineLogoRRef = useRef()
	const outlineLogoSRef = useRef()
	const solidLogoRRef = useRef()
	const solidLogoSRef = useRef()

	useEffect(() => {
		gsap
			.timeline()
			.to(bgRef.current, {
				duration: 1,
				opacity: 1,
			})
			.from([outlineLogoRRef.current, outlineLogoSRef.current], {
				drawSVG: '0%',
			})
			.to([outlineLogoRRef.current, outlineLogoSRef.current], {
				drawSVG: '100%',
				duration: 5,
			})

		gsap.fromTo(
			[solidLogoRRef.current, solidLogoSRef.current],
			{
				opacity: 0,
			},
			{
				opacity: 1,
				delay: 4,
				duration: 5,
			}
		)
	}, [])

	return (
		<div className='logo-container' ref={bgRef}>
			{/* LOGO R */}
			<img
				className='solid-logo-r'
				ref={solidLogoRRef}
				src={LogoR}
				alt='JavaScript,  Developer'
			/>

			{/* LOGO S */}
			<img
				className='solid-logo-s'
				ref={solidLogoSRef}
				src={LogoS}
				alt='JavaScript,  Developer'
			/>

			{/* SVG LOGO R */}
			<svg
				width='559pt'
				height='897pt'
				version='1.0'
				viewBox='0 0 559 897'
				xmlns='http://www.w3.org/2000/svg'
				className='svg-logo-r'
			>
				<g
					className='svg-container'
					transform='translate(0.000000,897.000000) scale(0.100000,-0.100000)'
					fill='none'
				>
					<path
						ref={outlineLogoRRef}
						d='M620 3841 l0 -3831 735 0 735 0 0 1620 0 1620 68 0 67 -1 850 -1605
							c468 -884 855 -1612 860 -1620 8 -12 131 -14 802 -12 l791 3 -900 1690 c-495
							930 -902 1695 -904 1700 -2 6 35 25 83 44 113 43 364 172 473 243 350 226 620
							551 763 918 119 303 168 696 137 1086 -53 650 -297 1131 -745 1464 -125 93
							-208 143 -370 221 -287 138 -572 214 -990 266 -111 14 -302 17 -1292 20
							l-1163 4 0 -3830z m2410 2375 c406 -72 632 -248 706 -551 26 -104 23 -334 -4
							-436 -83 -310 -291 -471 -687 -535 -75 -12 -205 -17 -527 -21 l-428 -6 0 788
							0 787 423 -5 c335 -3 441 -8 517 -21z'
					/>
				</g>
			</svg>

			{/* SVG LOGO S */}
			<svg
				width='559pt'
				height='897pt'
				version='1.0'
				viewBox='0 0 559 897'
				xmlns='http://www.w3.org/2000/svg'
				className='svg-logo-s'
			>
				<g
					className='svg-container'
					transform='translate(0.000000,897.000000) scale(0.100000,-0.100000)'
					fill='none'
				>
					<path
						ref={outlineLogoSRef}
						d='M2940 8053 c-159 -10 -420 -67 -589 -129 -201 -75 -437 -206 -606
							-338 -92 -72 -250 -231 -326 -329 -165 -213 -275 -432 -332 -662 -48 -192 -52
							-231 -52 -465 0 -194 3 -241 23 -338 102 -507 424 -980 1072 -1576 281 -259
							894 -792 1270 -1106 163 -136 426 -398 480 -479 58 -86 115 -203 135 -276 22
							-82 31 -287 15 -356 -66 -285 -352 -517 -701 -569 -134 -20 -341 -9 -454 24
							-190 56 -345 148 -503 300 -156 151 -304 348 -429 573 -26 46 -50 83 -55 83
							-7 0 -1207 -716 -1218 -726 -16 -17 230 -426 366 -607 446 -595 954 -914 1639
							-1029 113 -19 170 -22 440 -22 278 -1 325 1 454 22 441 71 789 214 1105 455
							367 279 644 716 745 1173 65 294 71 672 15 959 -90 460 -338 881 -770 1306
							-251 246 -437 406 -1163 999 -675 551 -889 756 -981 943 -106 216 -72 440 89
							597 118 114 250 166 451 176 361 19 674 -144 1091 -568 l145 -148 527 447 526
							446 -71 81 c-200 227 -507 510 -728 673 -491 361 -983 504 -1610 466z'
					/>
				</g>
			</svg>
		</div>
	)
}

export default Logo
