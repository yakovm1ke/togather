import { CSSProperties } from 'react'
import styles from './skeleton.module.css'

export interface SkeletonProps {
  variant?: 'text' | 'circular' | 'rectangular';
  width?: string | number;
  height?: string | number;
  className?: string;
}

export const Skeleton = ({
	variant = 'rectangular',
	width,
	height,
	className = '',
}: SkeletonProps) => {
	const style: CSSProperties = {}

	if (width !== undefined) {
		style.maxWidth = typeof width === 'number' ? `${width}px` : width
		style.width = '100%'
	}

	if (height !== undefined) {
		style.height = typeof height === 'number' ? `${height}px` : height
	}

	const classes = [
		styles.skeleton,
		styles[variant],
		styles.pulse,
		className,
	]
		.filter(Boolean)
		.join(' ')

	return <span className={classes} style={style} />
}

