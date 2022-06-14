import http from '@/utils/http'
export const sendCode = (mobile) => {
	return () => http.get(`/sms/codes/${mobile}`)
}
