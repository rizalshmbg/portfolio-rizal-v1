import { getDownloadURL, ref, uploadBytes } from 'firebase/storage'
import { auth, db, storage } from '../../firebase'
import { useRef } from 'react'
import { addDoc, collection } from 'firebase/firestore'

const HomeDashboard = () => {
	const form = useRef()

	const submitPortfolio = (e) => {
		e.preventDefault()

		const title = form.current[0]?.value
		const desc = form.current[1]?.value
		const url = form.current[2]?.value
		const img = form.current[3]?.files[0]

		const storageRef = ref(storage, `portfolio/${img.name}`)

		uploadBytes(storageRef, img).then(
			(snapshot) => {
				getDownloadURL(snapshot.ref).then(
					(downloadUrl) => {
						savePortfolio({
							title,
							desc,
							url,
							image: downloadUrl,
						})
					},
					() => {
						savePortfolio({
							title,
							desc,
							url,
							image: null,
						})
					}
				)
			},
			(error) => {
				console.log(error)
				savePortfolio({
					title,
					desc,
					url,
					image: null,
				})
			}
		)
	}

	const savePortfolio = async (portfolio) => {
		console.log(portfolio)

		try {
			await addDoc(collection(db, 'portfolio'), portfolio)
			window.location.reload(false)
		} catch (error) {
			alert('Failed to add portfolio')
			console.log(error)
		}
	}

	return (
		<div className='home-dashboard'>
			<form ref={form} onSubmit={submitPortfolio}>
				<input
					type='text'
					name='title'
					id='title'
					className='title'
					placeholder='Title'
				/>

				<textarea
					name='desc'
					id='desc'
					className='desc'
					placeholder='Description'
				/>

				<input
					type='text'
					name='url'
					id='url'
					className='url'
					placeholder='Url'
				/>

				<input
					type='file'
					name='img'
					id='img'
					className='img'
					placeholder='Image'
				/>

				<button type='submit'>Submit</button>
				<button onClick={() => auth.signOut()}>Sign Out</button>
			</form>
		</div>
	)
}

export default HomeDashboard
