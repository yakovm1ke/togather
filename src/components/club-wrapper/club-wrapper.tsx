import { ReactNode } from 'react'
import styles from './club-wrapper.module.css'

export type ClubWrapperProps = {
  title: string
  description?: ReactNode | string
  children?: ReactNode
}

export const ClubWrapper = (props: ClubWrapperProps) => {
  return (
    <div>
      <div className={styles.header}>
        <div className={styles.title}>
          {props.title}
        </div>

        {false && (
          <a>
            подробнее →
          </a>
        )}
      </div>

      {props.description && (
        <div className={styles.description}>
          {props.description}
        </div>
      )}

      {props.children && (
        <div className={styles.content}>
          {props.children}
        </div>
      )}
    </div>
  )
}