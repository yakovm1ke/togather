import { BaseLink } from '../../base-link'
import {format, formatDistance} from 'date-fns'
import {ru} from 'date-fns/locale'
import { ClubWrapper } from '../../club-wrapper'
import styles from './books-club.module.css'
import downloadIcon from '../../../assets/icons/download.svg'
import { Book } from '../../../api/schemas'

export type BooksClubProps = {
  book: Book
}

export const BooksClub = (props: BooksClubProps) => {

  const meetingAt = format(new Date(props.book.meetingAt), 'dd MMMM, HH:mm', {locale: ru})
  const isBeforeMeeting = new Date().getTime() < new Date(props.book.meetingAt).getTime()
  const distance = formatDistance(new Date(props.book.meetingAt), new Date(), {locale: ru})

  return (
    <div>
      <ClubWrapper
        title='«книг клуб»'
        description={(
          <>
            Обозначим сразу: если вы&nbsp;считаете, что читать книги это outdated, мы&nbsp;не&nbsp;будем вас переубеждать. Однако если вы&nbsp;верите, что&nbsp;литература лучше компьютерных игр, наркотиков, алкоголя и&nbsp;быстрых утех — нам с&nbsp;вами по&nbsp;пути и&nbsp;мы&nbsp;будем рады видеть вас на&nbsp;регулярных встречах &laquo;Книг клуба&raquo;. Чтобы&nbsp;точнее передать нашу философию, позволим себе перефразировать Рене Декарта (мы&nbsp;его пока не&nbsp;читали): &laquo;Я&nbsp;читаю, следовательно, я&nbsp;существую&raquo;.
          </>
        )}
      >
        <div className={styles.container}>
          <div className={styles.section}>
            <div>сейчас читаем</div>
            <div className={styles.sectionBody}>
              <div className={styles.download}>
                {props.book.name}

                <a
                  target='_blank'
                  href={props.book.url}
                  rel={'noreferrer noopener'}
                >
                  <img src={downloadIcon} />
                </a>
              </div>
            </div>
          </div>

          <div className={styles.section}>
            <div>ближайшая встреча</div>
            <div className={styles.sectionBody}>
              {meetingAt}
            </div>
          </div>

          <div className={styles.section}>
            <div>{isBeforeMeeting ? 'осталось времени' : 'с начала встречи'}</div>
            <div className={styles.sectionBody}>
              {distance}
            </div>
          </div>

          <div className={styles.section}>
            <div>где встречаемся</div>
            <div className={styles.sectionBody}>
              <BaseLink>
                <a
                  href='https://meet.google.com/aon-hnmr-dru'
                  target='_blank'
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