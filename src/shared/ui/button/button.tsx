import { ButtonHTMLAttributes } from 'react'
import styles from './button.module.css'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
	children?: React.ReactNode
	icon?: React.ReactNode
}

export const Button = ({ children, ...props }: ButtonProps) => {
	return (
		<button
			{...props}
			className={styles.button}
		>
			<div className={styles.buttonContent}>
				{children}
				{props.icon}
			</div>
		</button>
	)
}
