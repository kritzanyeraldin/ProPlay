import { Box } from '@mui/material'
import { Form, Image, Navbar } from './components'


const Login = () => {
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
