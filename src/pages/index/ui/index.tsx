// import { useEffect, useState } from 'react'
// import { BooksClub } from '~/widgets/books-club'
// import { Book, getBooks } from '~/entities/books'
// import { CinemaClub } from '~/widgets/cinema-club'
// import styles from './index.module.css'

// export const IndexPage = () => {
// 	const [books, setBooks] = useState<Book[]>([])
// 	const [loading, setLoading] = useState(false)

// 	const latestBook = books
// 		.slice()
// 		.sort((a, b) => new Date(b.meetingAt).getTime() - new Date(a.meetingAt).getTime())[0]

// 	const fetchClubs = async() => {
// 		try {
// 			const response = await getBooks()
// 			setBooks(response)
// 		} catch (e) {
// 			console.error(e, 'Не удалось получить книги')
// 		}
// 	}

// 	useEffect(() => {
// 		setLoading(true)
// 		fetchClubs().finally(() => setLoading(false))
// 	}, [])

// 	return (
// 		<div className={styles.page}>
// 			<BooksClub
// 				book={latestBook}
// 				loading={loading}
// 			/>
// 			<div className={styles.separator}></div>
// 			<CinemaClub />
// 		</div>
// 	)
// }

export const IndexPage = () => {
	return (
		<div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '40vh' }}>
			<h1>Сервис недоступен 🚫</h1>
		</div>
	)
}
