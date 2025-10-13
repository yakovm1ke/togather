import { createContext, useEffect, useState } from 'react'
import { Theme, THEMES, ThemeTokens, THEME_TOKEN_NAMES, TOKENS_BY_THEME } from './constants'
import { LOCAL_STORAGE_KEYS } from '~/shared/config'

export type ThemeContextType = {
	theme: Theme
	setTheme: (theme: Theme) => void
	toggleTheme: () => void
}

export const ThemeContext = createContext<ThemeContextType | null>(null)

const getThemeFromLocalStorage = (): Theme => {
	const theme = localStorage.getItem(LOCAL_STORAGE_KEYS.THEME)

	if (THEMES.some(t => t === theme)) {
		return theme as Theme
	}

	return 'light'
}

const applyThemeTokens = (theme: Theme) => {
	const tokens = TOKENS_BY_THEME[theme]

	Object.entries(THEME_TOKEN_NAMES).forEach(([key, tokenName]) => {
		window.document.documentElement.style.setProperty(tokenName, tokens[key as keyof ThemeTokens])
	})
}

export const useTheme = () => {
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
		localStorage.setItem(LOCAL_STORAGE_KEYS.THEME, theme)
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

	return {
		theme,
		setTheme,
		toggleTheme,
	}
}

