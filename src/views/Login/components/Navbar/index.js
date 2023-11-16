import { Box, Typography,} from '@mui/material'




const Navbar = () => {

	const customStyles = {
		fontSize:'80px',
		color: '#5EFF11',
		textShadow: '0 0 5px #48E100 , 0 0 15px #48E100 , 0 0 20px #48E100 , 0 0 40px #48E100 , 0 0 60px #48E100 , 0 0 10px #48E100 , 0 0 98px #48E100 ',
		
		// textShadow: '0 0 7px #fff,0 0 10px #fff,0 0 21px #fff,0 0 42px #0fa,0 0 82px #0fa,0 0 92px #0fa,0 0 102px #0fa,0 0 151px #0fa',
	};

	return (
		<Box
			sx={{
				bgcolor: 'primary.main',
				padding: 3,
				height:100,
			}}
		>
			<Typography fontFamily='"Ubuntu", sans-serif'
				style={customStyles}
			>
				Proplay
			</Typography>
		</Box>
	)
}

export default Navbar
