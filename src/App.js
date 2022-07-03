import React, { Suspense } from 'react'
import { Redirect } from 'react-router-dom'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

const Layout = React.lazy(() => import('@/pages/Layout'))
const Login = React.lazy(() => import('@/pages/Login'))
const Edit = React.lazy(() => import('@/pages/Edit'))
const App = () => {
	return (
		<Router>
			<div className='app'>
				<Suspense fallback={<div>Loading...</div>}>
					<Switch>
						<Redirect path='/' exact to={'/home'} />
						<Route path={'/login'} component={Login} />
						<Route path={'/home'} component={Layout} />
						<Route path={'/profile/edit'} component={Edit} />
					</Switch>
				</Suspense>
			</div>
		</Router>
	)
}
export default App
