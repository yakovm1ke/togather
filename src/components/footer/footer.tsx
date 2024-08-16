import { BaseLink } from '../base-link'

import styles from './footer.module.css'

export const Footer = () => {
  return (
    <div className={styles.footer}>
      <div>
        с вопросами{' '}
        <BaseLink>
          <a
            rel="noopener noreferrer"
            href="https://t.me/yakovmike"
            target='_blank'
          >
            сюда
          </a>
        </BaseLink>
      </div>
    </div>
  )
}