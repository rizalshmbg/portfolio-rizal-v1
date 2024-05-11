import { getAuth, onAuthStateChanged } from 'firebase/auth'
import { useEffect, useState } from 'react'
import HomeDashboard from './HomeDashboard'
import Login from '../Login'
import './index.scss'

const Dashboard = () => {
	const [user, setUser] = useState(null)
	const auth = getAuth()

	useEffect(() => {
		onAuthStateChanged(auth, (user) => {
			if (user) {
				setUser(user)
			} else {
				setUser(null)
			}
		})
	}, [])

	return <div>{user ? <HomeDashboard /> : <Login />}</div>
}

export default Dashboard
