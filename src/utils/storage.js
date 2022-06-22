export const TOKEN_KEY = 'geek-h5'
export const getTokenInfo = () => {
	return JSON.parse(localStorage.getItem(TOKEN_KEY)) || {}
}
export const setTokenInfo = (token) => {
	localStorage.setItem(TOKEN_KEY, JSON.stringify(token))
}
export const hasTokenInfo = () => !!getTokenInfo().token
export const removeTokenInfo = () => {
	localStorage.removeItem(TOKEN_KEY)
}
