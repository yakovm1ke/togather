import { createFirestoreClient } from '~/shared/api'
import { bookSchema } from '../model'

export const getBooks = async() => {
	const { fetchCollection } = createFirestoreClient()

	const books = await fetchCollection('books', bookSchema.array())

	return books
}
