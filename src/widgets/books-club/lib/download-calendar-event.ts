import { createEvent } from 'ics'
import { Book } from '~/entities/books'

export const downloadCalendarEvent = async(book: Book, meetingUrl: string) => {
	const filename = `Обсуждение книги «${book.name}» — ${book.author}`
	const date = new Date(book.meetingAt)

	const event: Parameters<typeof createEvent>[0] = {
		start: [
			date.getUTCFullYear(),
			date.getUTCMonth() + 1,
			date.getUTCDate(),
			date.getHours(),
			date.getUTCMinutes(),
		],
		duration: { hours: 2 },
		title: filename,
		url: meetingUrl,
	}

	const file = await new Promise<File>((resolve, reject) => {
		createEvent(event, (error, value) => {
			if (error) {
				reject(error)
				return
			}
			resolve(new File([value], filename, { type: 'text/calendar' }))
		})
	})

	const url = URL.createObjectURL(file)
	const anchor = document.createElement('a')
	anchor.href = url
	anchor.download = filename

	document.body.appendChild(anchor)
	anchor.click()
	document.body.removeChild(anchor)
	URL.revokeObjectURL(url)
}
