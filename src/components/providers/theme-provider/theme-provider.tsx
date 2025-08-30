import React, { createContext, useEffect, useState } from 'react'
import { applyThemeTokens, Theme, themes } from '../../../constants/theme'

type ThemeContextType = {
	theme: Theme
	setTheme: (theme: Theme) => void
	toggleTheme: () => void
}

const THEME_LOCAL_STORAGE_KEY = 'theme' as const

export const ThemeContext = createContext<ThemeContextType | null>(null)

const getThemeFromLocalStorage = (): Theme => {
	const theme = localStorage.getItem(THEME_LOCAL_STORAGE_KEY)

	if (themes.some(t => t === theme)) {
		return theme as Theme
	}

	return 'light'
}

export const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
	const [theme, setTheme] = useState<Theme>(getThemeFromLocalStorage())

	const toggleTheme = () => {
		if (theme === 'light') {
			setTheme('dark')
		} else {
			setTheme('light')
		}
	}

	useEffect(() => {
		applyThemeTokens(theme)
		localStorage.setItem(THEME_LOCAL_STORAGE_KEY, theme)
	}, [theme])

	useEffect(() => {
		if (!window.matchMedia) return
		const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)')
		mediaQuery.addEventListener('change', (e) => {
			if (e.matches) {
				setTheme('dark')
			} else {
				setTheme('light')
			}
		})
	}, [])

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
