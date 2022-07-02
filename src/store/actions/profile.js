import http from '@/utils/http'
import { SAVE_USER } from '@/store/action_types/profile'
const setUser = (user) => {
	return {
		type: SAVE_USER,
		payload: user,
	}
}
export const getUser = () => {
	return async (dispatch) => {
		const res = await http.get('/user')
		dispatch(setUser(res.data))
	}
}
