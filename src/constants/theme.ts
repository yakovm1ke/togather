export const themes = ['light', 'dark'] as const

export type Theme = typeof themes[number]

export const themeTokens = {
	background: '--background',
	textColor: '--text-color',
	accentColor: '--accent-color',
}

export type ThemeTokens = Record<keyof typeof themeTokens, string>

export const lightThemeTokens: ThemeTokens = {
	background: '#FFFFFF',
	textColor: '#000000',
	accentColor: '#023ae1',
}

export const darkThemeTokens: ThemeTokens = {
	background: '#161617',
	textColor: '#FFFFFF',
	accentColor: '#bd6cab',
}

export const applyThemeTokens = (theme: Theme) => {
	let tokens = lightThemeTokens

	switch (theme) {
	case 'light':
		tokens = lightThemeTokens
		break
	case 'dark':
		tokens = darkThemeTokens
		break
	}

	Object.entries(themeTokens).forEach(([key, tokenName]) => {
		window.document.documentElement.style.setProperty(tokenName, tokens[key as keyof ThemeTokens])
	})
}
