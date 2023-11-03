import { Box } from '@mui/material'

const Image = () => {
	return (
		<Box
			flexGrow={1}
			display='flex'
			justifyContent='center'
			alignItems='center'
		>
			<img
				alt='Gatito'
				src='https://www.marthastewart.com/thmb/IIv7TLn68Vwsri-lK3Du-H0mqIQ=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/cat-kitten-138468381-4cd82b91d7be45cb9f9aa8366e10bce4.jpg'
				style={{
					maxWidth: 400,
				}}
			/>
		</Box>
	)
}

export default Image
