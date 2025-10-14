import { createFirestoreClient } from '~/shared/api'
import { bookSchema } from '../model'

export const getBooks = async() => {
	const { fetchCollection } = createFirestoreClient()
	return await fetchCollection('books', bookSchema)
}
