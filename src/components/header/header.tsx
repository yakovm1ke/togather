import { Logo } from '../logo'
import styles from './header.module.css'

export const Header = () => {
  return (
    <div className={styles.header}>
      <Logo />
    </div>
  )
}