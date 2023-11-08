import { Routes, Route } from 'react-router-dom'
import { Languages, Login, Menu, Profile, Foro, Stadistic, Help, AdminU } from './views'
import { InternalLayout, InternalLayoutAdmin } from './layouts'



function App() {
	return (
		<>
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
					>
					</Route>
					<Route
						path='/foro'
						Component={Foro}
					>
					</Route>
					<Route
						path='/stadistic'
						Component={Stadistic}
					>
					</Route>
					<Route
						path='/help'
						Component={Help}
					>
					</Route>
				</Route>

				
				<Route Component={InternalLayoutAdmin}>
				<Route
					path='/1'
					Component={AdminU}
					></Route>
				</Route>
			</Routes>
		</>


	);
}

export default App;
