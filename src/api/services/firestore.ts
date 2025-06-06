import { collection, getDocs } from 'firebase/firestore/lite'
import { Firestore } from 'firebase/firestore/lite'
import { ZodSchema } from 'zod'
import { Collection } from '../types/collections'

export const createFirestoreService = (db: Firestore) => {
	const getCollection = async <T>(collectionName: Collection, schema: ZodSchema<T[]>) => {
		const col = collection(db, collectionName)
		const { docs } = await getDocs(col)
		const data = docs.map(doc => doc.data())
		return schema.parse(data)
	}

	return {
		getCollection,
	}
}
