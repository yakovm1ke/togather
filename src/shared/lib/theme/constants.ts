export const THEMES = ['light', 'dark'] as const

export type Theme = typeof THEMES[number]

export const THEME_TOKEN_NAMES = {
	background: '--background',
	textColor: '--text-color',
	accentColor: '--accent-color',
}

export type ThemeTokens = Record<keyof typeof THEME_TOKEN_NAMES, string>

export const TOKENS_BY_THEME: Record<Theme, ThemeTokens> = {
	light: {
		background: '#FFFFFF',
		textColor: '#000000',
		accentColor: '#023ae1',
	},

	dark: {
		background: '#161617',
		textColor: '#FFFFFF',
		accentColor: '#bd6cab',
	},
}

