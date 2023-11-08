import { Routes, Route, Navigate } from 'react-router-dom'
import {
	Languages,
	Login,
	Menu,
	Profile,
	Foro,
	Stadistic,
	Help,
	Course,
} from './views'
import { InternalLayout } from './layouts'
import { addCourse } from './views/Course/components'

function App() {
	return (
		<Box height='100vh'>
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
						path='/course'
						Component={Course}
					/>
					<Route
						path='/course/create'
						Component={addCourse}
					/>
				</Route>
			</Routes>
		</>
	)
}

export default App
