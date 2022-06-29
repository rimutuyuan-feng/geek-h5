import React, { lazy, Suspense } from 'react'
import Icon from '@/components/Icon'
import classNames from 'classnames'
import styles from './index.module.scss'
import { useHistory, useLocation } from 'react-router-dom'
import { Switch, Route } from 'react-router-dom'
const Home = lazy(() => import('@/pages/Home'))
const QA = lazy(() => import('@/pages/QA'))
const Video = lazy(() => import('@/pages/Video'))
const Profile = lazy(() => import('@/pages/Profile'))
const buttons = [
	{ id: 1, title: '首页', to: '/home', icon: 'iconbtn_home' },
	{ id: 2, title: '问答', to: '/home/qa', icon: 'iconbtn_qa' },
	{ id: 3, title: '视频', to: '/home/video', icon: 'iconbtn_video' },
	{ id: 4, title: '我的', to: '/home/profile', icon: 'iconbtn_mine' },
]
export default function Layout() {
	const history = useHistory()
	const location = useLocation()
	return (
		<div className={styles.root}>
			{/* 区域一：点击按钮切换显示内容的区域 */}
			<div className='tab-content'>
				<Suspense fallback={<div>loading...</div>}></Suspense>
			</div>
			{/* 区域二：按钮区域，会使用固定定位显示在页面底部 */}
			<div className='tabbar'>
				{buttons.map((button) => {
					return (
						<div
							key={button.id}
							className={classNames(
								'tabbar-item',
								location.pathname === button.to
									? 'tabbar-item-active'
									: ''
							)}
							onClick={() => {
								history.push(button.to)
							}}
						>
							<Icon
								type={
									location.pathname === button.to
										? button.icon + '_sel'
										: button.icon
								}
							/>
							<span>{button.title}</span>
						</div>
					)
				})}
			</div>
		</div>
	)
}
