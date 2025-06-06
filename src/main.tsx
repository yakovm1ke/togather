import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider } from 'react-router-dom'
import { router } from './router'
import { getRandomDarkColor } from './utils/colors'
import './styles/main.css'

// Set random accent color on app initialization
document.documentElement.style.setProperty('--accent-color', getRandomDarkColor())

ReactDOM.createRoot(document.getElementById('root')!).render(
	<React.StrictMode>
		<RouterProvider
			router={router}
		/>
	</React.StrictMode>,
)
