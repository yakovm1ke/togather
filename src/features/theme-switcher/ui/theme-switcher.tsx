import { Button } from '~/shared/ui/button'

import { Sun, Moon } from 'lucide-react'
import { useTheme } from '~/shared/lib/theme'

export const ThemeSwitcher = () => {
	const { theme, toggleTheme } = useTheme()

	return (
		<Button
			onClick={toggleTheme}
		>
			{theme === 'light' ? <Sun /> : <Moon />}
		</Button>
	)
}
