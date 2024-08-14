import { useEffect, useState } from 'react'
import { BooksClub } from '../components/preview/books-club'
import { createApi } from '../api'
import { Book } from '../api/schemas'

export const IndexPage = () => {
  const [books, setBooks] = useState<Book[]>([])
  const [loading, setLoading] = useState(false)

  const latestBook = books
    .slice()
    .sort((a, b) => new Date(b.meetingAt).getTime() - new Date(a.meetingAt).getTime())[0]

  const fetchClubs = async() => {
    try {
      const response = await createApi().getBooks()
      setBooks(response)
    } catch(e) {
      console.error(e, 'Не удалось получить книги')
    }
  }

  useEffect(() => {
    setLoading(true)
    fetchClubs().finally(() => setLoading(false))
  }, [])

  if (loading) {
    return (
      <div>
        Загрузка...
      </div>
    )
  }

  if (!latestBook) {
    return (
      <div>
        Ошибка. Не удалось получить данные
      </div>
    )
  }

  return (
    <div>
      <BooksClub
        book={latestBook}
      />
    </div>
  )
}