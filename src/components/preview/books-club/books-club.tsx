import { BaseLink } from '../../base-link'
import { format, formatDistance } from 'date-fns'
import { ru } from 'date-fns/locale'
import { ClubWrapper } from '../../club-wrapper'
import styles from './books-club.module.css'
import { Book } from '../../../api/schemas'
import { createEvent } from 'ics'
import { Button } from '../../button'

export type BooksClubProps = {
  book: Book
	loading?: boolean
}

export const BooksClub = (props: BooksClubProps) => {

	const meetingAt = format(new Date(props.book.meetingAt), 'dd MMMM, HH:mm (EEEE)', { locale: ru })
	const isBeforeMeeting = new Date().getTime() < new Date(props.book.meetingAt).getTime()
	const distance = formatDistance(new Date(props.book.meetingAt), new Date(), { locale: ru })

	async function downloadMeeting() {
		const filename = `Обсуждение книги «${props.book.name}» — ${props.book.author}`
		const date = new Date(props.book.meetingAt)

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
			url: 'https://meet.google.com/aon-hnmr-dru',
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

	return (
		<div>
			<ClubWrapper
				title='«книг клуб»'
				description={(
					<>
						Обозначим сразу: если вы&nbsp;считаете, что читать книги это outdated, мы&nbsp;не&nbsp;будем вас переубеждать.
						Однако если вы&nbsp;верите, что&nbsp;литература лучше компьютерных игр, наркотиков, алкоголя и&nbsp;быстрых
						утех — нам с&nbsp;вами по&nbsp;пути и&nbsp;мы&nbsp;будем рады видеть вас на&nbsp;регулярных встречах &laquo;Книг клуба&raquo;.
						Чтобы&nbsp;точнее передать нашу философию, позволим себе перефразировать Рене Декарта (мы&nbsp;его пока
						не&nbsp;читали): &laquo;Я&nbsp;читаю, следовательно, я&nbsp;существую&raquo;.
					</>
				)}
			>
				<div className={styles.section}>
					<div className={styles.sectionItem}>
						<div>{isBeforeMeeting ? 'сейчас читаем' : 'читали'}</div>
						<div className={styles.sectionItemBody}>
							<span className={styles.bookName}>
								{props.book.name}
							</span>
						</div>

						<div>
							{props.book.author}
						</div>

						<div>
							{props.book.url && (
								<BaseLink>
									<a
										rel='noopener noreferrer'
										target='_blank'
										href={props.book.url}
									>
										скачать
									</a>
								</BaseLink>
							)}
						</div>
					</div>

					<div className={styles.sectionItem}>
						<div>{isBeforeMeeting ? 'ближайшая встреча' : 'встреча была'}</div>
						<div className={styles.sectionItemBody}>
							{meetingAt}
						</div>
						{isBeforeMeeting && (
							<Button
								onClick={downloadMeeting}
							>
								добавить в календарь
							</Button>
						)}
					</div>

					<div className={styles.sectionItem}>
						<div>{isBeforeMeeting ? 'осталось времени' : 'с начала встречи'}</div>
						<div className={styles.sectionItemBody}>
							{distance}
						</div>
					</div>

					<div className={styles.sectionItem}>
						<div>где встречаемся</div>
						<div className={styles.sectionItemBody}>
							<BaseLink>
								<a
									href='https://meet.google.com/aon-hnmr-dru'
									target='_blank'
									rel='noopener noreferrer'
								>
									по ссылке
								</a>
							</BaseLink>
						</div>
					</div>
				</div>
			</ClubWrapper>
		</div>
	)
}
