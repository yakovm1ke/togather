import { ReactNode, useState } from 'react'
import styles from './club-wrapper.module.css'
import { Button } from '../button'

export type ClubWrapperProps = {
  title: string
  description?: ReactNode | string
  children?: ReactNode
}

export const ClubWrapper = (props: ClubWrapperProps) => {
	const [isDescriptionShown, setIsDescriptionShown] = useState(false)

	return (
		<div>
			<div className={styles.header}>
				<div className={styles.title}>
					{props.title}
				</div>
			</div>

			{props.description && (
				<>
					<div className={styles.descriptionButton}>
						<Button
							onClick={() => setIsDescriptionShown(!isDescriptionShown)}
						>
							{isDescriptionShown ? 'скрыть описание клуба' : 'показать описание клуба'}
						</Button>
					</div>

					{isDescriptionShown && (
						<div className={styles.description}>
							{props.description}
						</div>
					)}
				</>
			)}

			{props.children && (
				<div className={styles.content}>
					{props.children}
				</div>
			)}
		</div>
	)
}
