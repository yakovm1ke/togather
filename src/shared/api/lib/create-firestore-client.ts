import { collection, getDocs, getFirestore } from 'firebase/firestore'
import { FIREBASE_CONFIG } from '../config/firebase'
import { ZodSchema } from 'zod'
import { initializeApp } from 'firebase/app'

export const createFirestoreClient = () => {
	const app = initializeApp(FIREBASE_CONFIG)
	const db = getFirestore(app)

	const fetchCollection = async <T>(collectionName: string, schema: ZodSchema<T>) => {
		const col = collection(db, collectionName)
		const { docs } = await getDocs(col)
		const data = docs.map(doc => doc.data())

		if (!Array.isArray(data)) {
			throw new Error(`Collection «${collectionName}» is not an array`)
		}

		return data
			.map((book) => {
				const result  = schema.safeParse(book)
				if (!result.success) {
					return null
				}
				return result.data
			})
			.filter((item): item is T => !!item)

	}

	return { fetchCollection }
}
