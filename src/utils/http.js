import axios from 'axios'
const http = axios.create({
	baseURL: 'http://toutiao.itheima.net/v1_0',
	timeout: 1000,
})
http.interceptors.request.use((config) => {
	return config
})
http.interceptors.response.use(
	(response) => {
		return response.data
	},
	(error) => Promise.reject(error)
)
export default http
