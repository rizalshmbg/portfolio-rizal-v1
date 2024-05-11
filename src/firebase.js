import { initializeApp } from 'firebase/app'
import { GoogleAuthProvider, getAuth, signInWithPopup } from 'firebase/auth'
import { getStorage } from 'firebase/storage'
import { getFirestore } from 'firebase/firestore'
// import { getAnalytics } from 'firebase/analytics'

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
	apiKey: `${import.meta.env.VITE_FIREBASE_API_KEY}`,
	authDomain: `${import.meta.env.VITE_FIREBASE_AUTH_DOMAIN}`,
	projectId: `${import.meta.env.VITE_FIREBASE_PROJECT_ID}`,
	storageBucket: `${import.meta.env.VITE_FIREBASE_STORAGE_BUCKET}`,
	messagingSenderId: `${import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID}`,
	appId: `${import.meta.env.VITE_FIREBASE_APP_ID}`,
	measurementId: `${import.meta.env.VITE_FIREBASE_MEASUREMENT_ID}`,
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)
// const analytics = getAnalytics(app)
const provider = new GoogleAuthProvider()
export const auth = getAuth()
export const db = getFirestore(app)
export const storage = getStorage(app)

export const signInWithGoogle = () => signInWithPopup(auth, provider)
