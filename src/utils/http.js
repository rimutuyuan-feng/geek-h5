import { Toast } from 'antd-mobile'
import axios from 'axios'
import { getTokenInfo } from './storage'
const http = axios.create({
	baseURL: 'http://toutiao.itheima.net/v1_0',
	timeout: 3000,
})
http.interceptors.request.use((config) => {
	const token = getTokenInfo().token
	if (token) {
		config.heards['Authorization'] = 'Bearer ' + token
	}
	return config
})
http.interceptors.response.use(
	(response) => {
		return response.data
	},
	(error) => {
		if (error.response) {
			Toast.show({ content: '服务器繁忙' })
		} else {
			Toast.show({ content: error.response.data.message })
		}
		Promise.reject(error)
	}
)
export default http
