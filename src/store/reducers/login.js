const initalState = {
	token: '',
	refresh_token: '',
}
export default function reducer(state = initalState, action) {
	const { type, payload } = action
	switch (type) {
		case 'login/token':
			return payload
		default:
			return state
	}
}
