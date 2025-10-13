import { collection, getDocs, getFirestore } from 'firebase/firestore'
import { FIREBASE_CONFIG } from '../config/firebase'
import { ZodSchema } from 'zod'
import { initializeApp } from 'firebase/app'

export const createFirestoreClient = () => {
	const app = initializeApp(FIREBASE_CONFIG)
	const db = getFirestore(app)

	const fetchCollection = async <T>(collectionName: string, schema: ZodSchema<T[]>) => {
		const col = collection(db, collectionName)
		const { docs } = await getDocs(col)
		const data = docs.map(doc => doc.data())
		return schema.parse(data)
	}

	return { fetchCollection }
}
