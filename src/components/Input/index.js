import React from 'react'
import classNames from 'classnames'
import styles from './index.module.scss'
export default function Input({ className, extra, onExtraClick, ...rest }) {
	return (
		<div className={classNames(styles.root, className)}>
			<input className='input' {...rest} />
			{extra && (
				<span className='extra' onClick={onExtraClick}>
					{extra}
				</span>
			)}
		</div>
	)
}
