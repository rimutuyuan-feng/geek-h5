import NavBar from '@/components/NavBar'
import styles from './index.module.scss'
import { List, DatePicker } from 'antd-mobile'
import { useState } from 'react'
const { Item } = List
export default function Edit() {
	const [visible, setVisible] = useState(false)
	return (
		<div className={styles.root}>
			<div className='content'>
				<NavBar>个人信息</NavBar>
				<div className='wrapper'>
					<List className='profile-list'>
						<Item onClick={() => {}} extra={<img src='' alt='' />}>
							头像
						</Item>
						<Item onClick={() => {}} extra='1245648'>
							昵称
						</Item>
						<Item
							onClick={() => {}}
							extra={<span className='intro'>{'未填写'}</span>}
						>
							简介
						</Item>
					</List>
					<List className='profile-list'>
						<Item onClick={() => {}} extra={'男'}>
							性别
						</Item>

						<DatePicker
							visible={visible}
							mouseWheel={true}
							onClose={() => {
								setVisible(false)
							}}
							title='选择生日'
							min={new Date(1900, 1, 1)}
							max={new Date()}
						>
							{(value) => (
								<Item
									onClick={() => {
										setVisible(true)
									}}
									extra={value?.toDateString()}
								>
									生日
								</Item>
							)}
						</DatePicker>
					</List>
				</div>
			</div>
		</div>
	)
}
