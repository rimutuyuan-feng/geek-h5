import React from 'react'
import NavBar from '@/components/NavBar'
import Input from '@/components/Input'
import { useFormik } from 'formik'
import * as Yup from 'yup'
import classNames from 'classnames'
import styles from './index.module.scss'
import { useDispatch } from 'react-redux'
import { sendCode } from '@/store/actions/login'
import { Toast } from 'antd-mobile'
export default function Login() {
	const dispatch = useDispatch()
	const formik = useFormik({
		initialValues: {
			mobile: '',
			code: '',
		},
		onSubmit: (values) => {
			console.log(values)
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
								extra='获取验证码'
								maxLength={6}
								onExtraClick={async () => {
									if (!/^1[3-9]\d{9}$/.test(mobile)) {
										formik.setTouched({
											mobile: true,
										})
										return
									}
									try {
										await dispatch(sendCode(mobile))
									} catch (err) {
										if (err.response) {
											Toast.show({
												content:
													err.response.data.message,
											})
										} else {
											Toast.show({
												content: '服务器繁忙',
											})
										}
									}
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
