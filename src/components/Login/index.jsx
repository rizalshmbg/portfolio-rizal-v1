import { signInWithGoogle } from '../../firebase'
import './index.scss'

const Login = () => {
	return (
		<div className='dashboard'>
			<button onClick={signInWithGoogle}>Sign In With Google</button>
		</div>
	)
}

export default Login
