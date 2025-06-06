import { bookSchema } from './schemas'
import { initializeFirebase } from './config/firebase'
import { createFirestoreService } from './services/firestore'

export const createApi = () => {
	const db = initializeFirebase()
	const firestoreService = createFirestoreService(db)

	return {
		getBooks: () => firestoreService.getCollection('books', bookSchema.array()),
	}
}
