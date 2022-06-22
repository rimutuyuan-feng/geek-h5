import { getTokenInfo } from '@/utils/storage'
import { applyMiddleware, createStore } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunk from 'redux-thunk'
import rootReducer from './reducers'
const store = createStore(
	rootReducer,
	{ login: getTokenInfo() },
	composeWithDevTools(applyMiddleware(thunk))
)
export default store
