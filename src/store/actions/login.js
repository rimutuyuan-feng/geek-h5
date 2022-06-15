import http from '@/utils/http'
export const sendCode = (mobile) => {
	return () => http.get(`/sms/codes/${mobile}`)
}
export const login = (params) => {
	return async (dispatch) => {
		const res = await http.post('/authorizations', params)
		dispatch(saveToken(res.data))
	}
}
export const saveToken = (tokenInfo) => {
	return {
		type: 'login/token',
		payload: tokenInfo,
	}
}
