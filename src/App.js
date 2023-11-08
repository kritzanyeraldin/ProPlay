import { Routes, Route } from 'react-router-dom'
import { Languages, Login, Menu, Profile, Foro, Stadistic, Help } from './views'
import { InternalLayout } from './layouts'
import { Box } from '@mui/material'

function App() {
	return (
		<Box height='100vh'>
			<Routes>
				<Route
					path='/'
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
					></Route>
					<Route
						path='/foro'
						Component={Foro}
					></Route>
					<Route
						path='/stadistic'
						Component={Stadistic}
					></Route>
					<Route
						path='/help'
						Component={Help}
					></Route>
				</Route>
			</Routes>
		</Box>
	)
}

export default App
