import React from 'react'
import { ThemeContext, useTheme } from '~/shared/lib/theme'

export const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
	const { theme, setTheme, toggleTheme } = useTheme()

	return (
		<ThemeContext.Provider
			value={{
				theme,
				setTheme,
				toggleTheme,
			}}
		>
			{children}
		</ThemeContext.Provider>
	)
}
