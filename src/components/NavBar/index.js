import React from 'react'
import Icon from '../Icon'
import classNames from 'classnames'
import styles from './index.module.scss'
import { useHistory } from 'react-router-dom'
export default function NavBar({ className, children, rightContent }) {
	const history = useHistory()
	return (
		<div className={classNames(styles.root, className)}>
			{/* 后退按钮 */}
			<div className='left' onClick={() => history.goBack()}>
				<Icon type='iconfanhui' />
			</div>
			{/* 居中标题 */}
			<div className='title'>{children}</div>

			{/* 右侧内容 */}
			<div className='right'>{rightContent}</div>
		</div>
	)
}
