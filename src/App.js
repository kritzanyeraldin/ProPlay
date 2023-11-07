import { Routes, Route, Navigate } from 'react-router-dom'
import {
	Languages,
	Login,
	Menu,
	Profile,
	Foro,
	Stadistic,
	Help,
	AdminU,
} from './views'
import { InternalLayout } from './layouts'

function App() {
	return (
		<>
			<Routes>
				<Route
					path='/'
					element={
						<Navigate
							to='/login'
							replace
						/>
					}
				/>
				<Route
					path='/login'
					Component={Login}
				/>
				<Route Component={InternalLayout}>
					<Route
						path='/profile'
						Component={Profile}
					/>
					<Route
						path='/menu'
						Component={Menu}
					/>
					<Route
						path='/languages'
						Component={Languages}
					/>
					<Route
						path='/foro'
						Component={Foro}
					/>
					<Route
						path='/stadistic'
						Component={Stadistic}
					/>
					<Route
						path='/help'
						Component={Help}
					/>
					<Route
						path='/admin'
						Component={AdminU}
					/>
				</Route>
			</Routes>
		</>
	)
}

export default App
