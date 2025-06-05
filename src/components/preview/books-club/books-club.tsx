import { BaseLink } from '../../base-link'
import { format, formatDistance } from 'date-fns'
import { ru } from 'date-fns/locale'
import { ClubWrapper } from '../../club-wrapper'
import styles from './books-club.module.css'
import downloadIcon from '../../../assets/icons/download.svg'
import { Book } from '../../../api/schemas'
import { createEvent } from 'ics'

export type BooksClubProps = {
  book: Book
}

export const BooksClub = (props: BooksClubProps) => {

	const meetingAt = format(new Date(props.book.meetingAt), 'dd MMMM, HH:mm (EEEE)', { locale: ru })
	const isBeforeMeeting = new Date().getTime() < new Date(props.book.meetingAt).getTime()
	const distance = formatDistance(new Date(props.book.meetingAt), new Date(), { locale: ru })

	async function handleDownload() {
		const filename = `Обсуждение книги «${props.book.name}» — ${props.book.author}`
		const file = await new Promise<File>((resolve, reject) => {
			const date = new Date(props.book.meetingAt)

			createEvent(
				{
					start: [date.getUTCFullYear(), date.getUTCMonth() + 1, date.getUTCDate(), date.getHours(), date.getUTCMinutes()],
					duration: { hours: 2 },
					title: filename,
					url: 'https://meet.google.com/aon-hnmr-dru',
				},
				(error, value) => {
					if (error) {
						reject(error)
					}

					resolve(new File([value], filename, { type: 'text/calendar' }))
				})
		})
		const url = URL.createObjectURL(file)

		// trying to assign the file URL to a window could cause cross-site
		// issues so this is a workaround using HTML5
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
            не&nbsp;читали): &laquo;Я&nbsp;читаю,следовательно, я&nbsp;существую&raquo;.
					</>
				)}
			>
				<div className={styles.section}>
					<div className={styles.sectionItem}>
						<div>{isBeforeMeeting ? 'сейчас читаем' : 'читали'}</div>
						<div className={styles.sectionItemBody}>
							<div className={styles.download}>
								{props.book.name}
                &nbsp;&nbsp;
								{props.book.url && (
									<a
										rel="noopener noreferrer"
										target='_blank'
										href={props.book.url}
									>
										<img src={downloadIcon} />
									</a>
								)}
							</div>
						</div>
						<div>
							{props.book.author}
						</div>
					</div>

					<div className={styles.sectionItem}>
						<div>{isBeforeMeeting ? 'ближайшая встреча' : 'встреча была'}</div>
						<div className={styles.sectionItemBody}>
							{meetingAt}
						</div>
						{isBeforeMeeting && (
							<button
								onClick={handleDownload}
								className={styles.button}
							>
                Добавить в календарь
							</button>
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
									rel="noopener noreferrer"
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
