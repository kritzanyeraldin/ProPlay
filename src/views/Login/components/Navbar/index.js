import { Box, Typography } from '@mui/material'

const Navbar = () => {
	return (
		<Box
			sx={{
				bgcolor: 'grey',
				padding: 3,
				height:100,
			}}
		>
			<Typography
				fontSize={35}
			>
				PROPLAY
			</Typography>
		</Box>
	)
}

export default Navbar
