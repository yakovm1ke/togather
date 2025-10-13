import { Logo } from '~/shared/ui/logo'
import { ThemeSwitcher } from '~/features/theme-switcher'
import styles from './header.module.css'

export const Header = () => {
	return (
		<div className={styles.header}>
			<div className={styles.headerLogo}>
				<Logo />
			</div>

			<div>
				<ThemeSwitcher />
			</div>
		</div>
	)
}
