import styles from './club-wrapper.module.css'
import { ReactNode } from 'react'

export type ClubWrapperProps = {
  title: string
  description?: ReactNode | string
  children?: ReactNode
}

export const ClubWrapper = (props: ClubWrapperProps) => {

	return (
		<div>
			<div className={styles.header}>
				<div className={styles.title}>
					{props.title}
				</div>
			</div>

			{props.children && (
				<div className={styles.content}>
					{props.children}
				</div>
			)}

			{props.description && (
				<>
					<div className={styles.description}>
						{props.description}
					</div>
				</>
			)}
		</div>
	)
}
