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
import { Skeleton } from '~/shared/ui/skeleton'

export type BooksClubProps = {
  book: Book | null
	loading: boolean
}

const ACTIVE_MEETING_URL = BOOKS_CLUB_MEETING_URL.JITSI

const SKELETON_SIZES = Array.from({ length: 4 }, () => {
	return [
		{
			width: Math.random() * 100 + 100,
			height: 26,
		},
		{
			width: Math.random() * 200 + 300,
			height: 46,
		},
	]
})

export const BooksClub = ({ book, loading }: BooksClubProps) => {
	const meetingAt = book?.meetingAt ? format(new Date(book?.meetingAt), 'dd MMMM, HH:mm (EEE)', { locale: ru }) : ''
	const isBeforeMeeting = book?.meetingAt ? new Date().getTime() < new Date(book.meetingAt).getTime() : false
	const distance = book?.meetingAt ? formatDistance(new Date(book.meetingAt), new Date(), { locale: ru }) : ''

	const onDownload = useCallback(() => {
		if (!book) return
		downloadCalendarEvent(book, ACTIVE_MEETING_URL)
	}, [book])

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
				{loading && (
					<div className={styles.section}>
						{SKELETON_SIZES.map((sizes, index) => (
							<div className={styles.sectionItem} key={index}>
								{sizes.map((size, index) => (
									<Skeleton variant='text' width={size.width} height={size.height} key={index} />
								))}
							</div>
						))}
					</div>
				)}

				{!book && !loading && (
					<div>
						Книга не найдена
					</div>
				)}

				{!loading && book && (
					<div className={styles.section}>
						<div className={styles.sectionItem}>
							<div>{isBeforeMeeting ? 'сейчас читаем' : 'читали'}</div>
							<div className={styles.sectionItemBody}>
								<span>
									{book.name}
									{book.url && (
										<>
											&nbsp;
											<Button
												icon={<ArrowDownToLine />}
												onClick={() => {
													window.open(book.url, '_blank')
												}}
											/>
										</>
									)}
								</span>
							</div>

							<div>
								{book.author}
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
				)}
			</ClubWrapper>
		</div>
	)
}
