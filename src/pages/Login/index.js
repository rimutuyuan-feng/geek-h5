import React, { useState, useRef } from 'react'
import NavBar from '@/components/NavBar'
import Input from '@/components/Input'
import { useFormik } from 'formik'
import * as Yup from 'yup'
import classNames from 'classnames'
import styles from './index.module.scss'
import { useDispatch } from 'react-redux'
import { login, sendCode } from '@/store/actions/login'
import { Toast } from 'antd-mobile'
export default function Login() {
	const [codeTime, setCodeTime] = useState(0)
	const timeId = useRef(-1)
	const dispatch = useDispatch()
	const formik = useFormik({
		initialValues: {
			mobile: '',
			code: '',
		},
		onSubmit: async (values) => {
			await dispatch(login(values))
			Toast.show({ content: '登录成功' })
		},
		validationSchema: Yup.object({
			mobile: Yup.string()
				.required('手机号不能为空')
				.matches(/^1[3-9]\d{9}$/, '手机号格式错误'),
			code: Yup.string()
				.required('验证码不能为空')
				.matches(/^\d{6}$/, '验证码格式错误'),
		}),
	})
	const {
		values: { mobile, code },
		handleSubmit,
		handleChange,
		errors,
		handleBlur,
		touched,
		isValid,
	} = formik
	return (
		<div className={styles.root}>
			<NavBar>登录</NavBar>
			<div className='content'>
				<h3>登录</h3>
				<form onSubmit={handleSubmit}>
					<div className='input-item'>
						<Input
							name='mobile'
							placeholder='请输入手机号'
							value={mobile}
							onChange={handleChange}
							onBlur={handleBlur}
							maxLength={11}
							autoComplete='off'
						/>
						{touched.mobile && errors.mobile && (
							<div className='validate'>{errors.mobile}</div>
						)}
					</div>
					<div className='input-item'>
						<div className='input-box'>
							<Input
								value={code}
								name='code'
								placeholder='请输入验证码'
								extra={codeTime ? codeTime : '获取验证码'}
								maxLength={6}
								autoComplete='off'
								onExtraClick={async () => {
									if (codeTime) {
										return
									}
									if (!/^1[3-9]\d{9}$/.test(mobile)) {
										formik.setTouched({
											mobile: true,
										})
										return
									}

									setCodeTime(3)
									timeId.current = setInterval(() => {
										setCodeTime((codeTime) => {
											if (codeTime === 1) {
												clearInterval(timeId.current)
											}
											return codeTime - 1
										})
									}, 1000)
									await dispatch(sendCode(mobile))
									Toast.show({ content: '发送验证码成功' })
								}}
								onChange={handleChange}
								onBlur={handleBlur}
							/>
						</div>
						{touched.code && errors.code && (
							<div className='validate'>{errors.code}</div>
						)}
					</div>
					<button
						type='submit'
						className={classNames(
							'login-btn',
							isValid ? '' : 'disabled'
						)}
					>
						登录
					</button>
				</form>
			</div>
		</div>
	)
}
