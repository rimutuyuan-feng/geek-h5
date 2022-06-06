import React, { Suspense } from 'react'
import { Redirect } from 'react-router-dom'
import { BrowserRouter as Router, Link, Switch, Route } from 'react-router-dom'

const Home = React.lazy(() => import('@/pages/Home'))
const Login = React.lazy(() => import('@/pages/Login'))
const App = () => {
	return (
		<Router>
			<div className='app'>
				<Link to='/login'>登录</Link>
				<Link to='/home'>首页</Link>
				<Suspense>
					<Switch>
						<Redirect path='/' exact to={'/home'} />
						<Route path={'/login'} component={Login} />
						<Route path={'/home'} component={Home} />
					</Switch>
				</Suspense>
			</div>
		</Router>
	)
}
export default App
