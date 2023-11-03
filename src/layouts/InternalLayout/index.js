import { Box } from '@mui/material'
import { Outlet } from 'react-router-dom'

const InternalLayout = () => {
	return (
		<Box
			bgcolor='peru'
			display='flex'
			height='100vh'
		>
			<Box bgcolor='red'>InternalLayout</Box>
			<Box flexGrow={1}>
				<Outlet />
			</Box>
		</Box>
	)
}

export default InternalLayout
