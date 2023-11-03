import { Box, Button, TextField, Typography } from '@mui/material'

const Form = () => {
	return (
		<Box
			flexGrow={1}
			display='flex'
			justifyContent='center'
			alignItems='center'
		>
			<Box
				display='flex'
				flexDirection='column'
				width={400}
				
				py={10}
			>
				<Box
					display='flex'
					flexDirection='column'
					gap={2}
					alignItems='center'
					justifyContent='space-around'
					bgcolor='grey.300'
					p={2}
					height={200}
				>
					<Typography
						fontSize={24}
						fontWeight='bold'
					>
						Welcome
					</Typography>
					<Button
						variant='contained'
						color='secondary'
					>
						Create account
					</Button>
				</Box>
				<Box
					display='flex'
					flexDirection='column'
					bgcolor='grey.500'
					p={2}
					gap={2}
					alignItems='center'
					height={300}
				>
					<TextField
						fullWidth
						label='User'
					/>
					<TextField
						fullWidth
						label='Password'
					/>
					<Button variant='contained'>Login</Button>
				</Box>
			</Box>
		</Box>
	)
}

export default Form
