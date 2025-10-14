import { BaseLink } from '~/shared/ui/base-link'
import { format, formatDistance } from 'date-fns'
import { ru } from 'date-fns/locale'
import { ClubWrapper } from '~/shared/ui/club-wrapper'
import styles from './books-club.module.css'
import { Book } from '~/entities/books'
import { Button } from '~/shared/ui/button'
import { ArrowDownToLine, CalendarPlus } from 'lucide-react'
import { BOOKS_CLUB_MEETING_URL } from '~/widgets/books-club/config/constants'
import { useCallback } from 'react'
import { downloadCalendarEvent } from '../lib/download-calendar-event'

export type BooksClubProps = {
  book: Book
	loading?: boolean
}

const ACTIVE_MEETING_URL = BOOKS_CLUB_MEETING_URL.JITSI

export const BooksClub = (props: BooksClubProps) => {
	const meetingAt = format(new Date(props.book.meetingAt), 'dd MMMM, HH:mm (EEE)', { locale: ru })
	const isBeforeMeeting = new Date().getTime() < new Date(props.book.meetingAt).getTime()
	const distance = formatDistance(new Date(props.book.meetingAt), new Date(), { locale: ru })

	const onDownload = useCallback(() => {
		downloadCalendarEvent(props.book, ACTIVE_MEETING_URL)
	}, [props.book])

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

								{props.book.url && (
									<>
									&nbsp;
										<Button
											icon={<ArrowDownToLine />}
											onClick={() => {
												window.open(props.book.url, '_blank')
											}}
										/>
									</>
								)}
							</span>
						</div>

						<div>
							{props.book.author}
						</div>
					</div>

					<div className={styles.sectionItem}>
						<div>{isBeforeMeeting ? 'ближайшая встреча' : 'встреча была'}</div>
						<div className={styles.sectionItemBody}>
							{meetingAt}

							{isBeforeMeeting && (
								<>&nbsp;
									<Button
										onClick={onDownload}
										icon={<CalendarPlus />}
									/>
								</>
							)}

						</div>
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
									href={ACTIVE_MEETING_URL}
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
