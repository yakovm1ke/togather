import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider } from 'react-router-dom'
import { router } from './router'
import './styles/main.css'
import { ThemeProvider } from './components/providers/theme-provider'

ReactDOM.createRoot(document.getElementById('root')!).render(
	<React.StrictMode>
		<ThemeProvider>
			<RouterProvider
				router={router}
			/>
		</ThemeProvider>
	</React.StrictMode>,
)
