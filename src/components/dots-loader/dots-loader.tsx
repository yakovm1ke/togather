import { useEffect, useState } from 'react'

export const DotsLoader = () => {
	const [dots, setDots] = useState('')

	useEffect(() => {
		const interval = setInterval(() => {
			setDots((dots) => dots === '...' ? '' : dots + '.')
		}, 200)

		return () => clearInterval(interval)
	}, [])

	return (
		<div>
			Загрузка{dots}
		</div>
	)
}
