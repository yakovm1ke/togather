import React from 'react'
import { ThemeProvider } from './providers/theme-provider'
import { RouterProvider } from 'react-router-dom'
import { router } from './router'
import './styles/main.css'

export const App = () => {
	return (
		<React.StrictMode>
			<ThemeProvider>
				<RouterProvider
					router={router}
				/>
			</ThemeProvider>
		</React.StrictMode>
	)
}

