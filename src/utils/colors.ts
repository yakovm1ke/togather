/**
 * Generates a random dark color in hex format
 * @returns {string} A hex color code (e.g., '#1a2b3c')
 */
export const getRandomDarkColor = (): string => {
	// Generate random values for RGB, but keep them low to ensure dark colors
	const r = Math.floor(Math.random() * 128) // 0-127
	const g = Math.floor(Math.random() * 128) // 0-127
	const b = Math.floor(Math.random() * 128) // 0-127

	// Convert to hex and ensure two digits for each component
	const toHex = (n: number): string => {
		const hex = n.toString(16)
		return hex.length === 1 ? '0' + hex : hex
	}

	return `#${toHex(r)}${toHex(g)}${toHex(b)}`
}
