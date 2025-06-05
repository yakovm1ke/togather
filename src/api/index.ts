import { initializeApp } from 'firebase/app'
import { getFirestore, collection, getDocs } from 'firebase/firestore/lite'
import { bookSchema } from './schemas'
import { ZodSchema } from 'zod'

const firebaseConfig = {
	apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
	authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
	projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
	storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
	messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
	appId: import.meta.env.VITE_FIREBASE_APP_ID,
}

const collections = ['books'] as const

type Collection = typeof collections[number]

export const createApi = () => {
	const app = initializeApp(firebaseConfig)
	const db = getFirestore(app)

	const getCollection = async <T>(collectionName: Collection, schema: ZodSchema<T[]>) => {
		const col = collection(db, collectionName)
		const { docs } = await getDocs(col)
		const data = docs.map(doc => doc.data())
		return schema.parse(data)
	}

	return {
		getBooks: () => getCollection('books', bookSchema.array()),
	}
}
