import { SAVE_USER } from '../action_types/profile'
const initalState = {
	user: {},
	profile: {},
}
export default function reducer(state = initalState, action) {
	const { type, payload } = action
	switch (type) {
		case SAVE_USER:
			return { ...state, user: { ...payload } }
		default:
			return state
	}
}
