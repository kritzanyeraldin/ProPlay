import { Routes, Route } from 'react-router-dom'
import { Login, SecondView } from './views'
import { InternalLayout } from './layouts'



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
						path='/second'
						Component={SecondView}
					/>
					<Route
						path='/third'
						Component={Login}
					/>
				</Route>
			</Routes>
		</>
    

  );
}

export default App;
