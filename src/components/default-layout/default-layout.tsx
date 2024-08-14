import { Outlet } from 'react-router-dom'
import styles from './default-layout.module.css'
import { Header } from '../header'
import { Footer } from '../footer'

export const DefaultLayout = () => {
  return (
    <div className={styles.page}>
      <header className={styles.header}>
        <div className={styles.headerContent}>
          <Header />
        </div>
      </header>

      <div className={styles.content}>
        <Outlet />
      </div>

      <footer className={styles.footer}>
        <div className={styles.footerContent}>
          <Footer />
        </div>
      </footer>
    </div>
  )
}