import { ReactNode } from 'react'

import styles from './base-link.module.css'

export type BaseLinkProps = {
  children: ReactNode
}

export const BaseLink = (props: BaseLinkProps) => {
  return (
    <span className={styles.baseLink}>
      {props.children}
    </span>
  )
}