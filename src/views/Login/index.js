import { Box } from '@mui/material'
import { Form, Image, Navbar } from './components'
import { Navigate } from 'react-router-dom'
import { getAllowedPaths } from '../../utils'

const Login = () => {
	const userAsString = localStorage.getItem('user')

	if (userAsString) {
		const user = JSON.parse(userAsString)
		const allowedPaths = getAllowedPaths(user)

		return (
			<Navigate
				to={allowedPaths[0]}
				replace
			/>
		)
	}

	return (
		<Box
			display='flex'
			flexDirection='column'
			height='100%'
			bgcolor='grey.400'
		>
			<Navbar />
			<Box
				display='flex'
				flexGrow={1}
			>
				<Image />
				<Form />
			</Box>
		</Box>
	)
}

export default Login
