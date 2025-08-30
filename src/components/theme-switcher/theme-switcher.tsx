import { useContext } from 'react'
import { ThemeContext } from '../providers/theme-provider'
import { Button } from '../button'

import { Sun, Moon } from 'lucide-react'

export const ThemeSwitcher = () => {
	const themeContext = useContext(ThemeContext)

	return (
		<Button
			onClick={themeContext?.toggleTheme}
		>
			{themeContext?.theme === 'light' ? <Sun /> : <Moon />}
		</Button>
	)
}
