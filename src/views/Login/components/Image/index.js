import { Box,  Typography } from "@mui/material";
import icono3 from '/home/squi/Escritorio/ProPlay/src/assets/imagenes/icono3.png'

const Image = () => {

  // const customStyles = {
	// 	fontSize:'100px',
	// 	color: '#91FF5D',
	// 	textShadow: '0 0 5px #18FF00 , 0 0 15px #18FF00 , 0 0 20px #18FF00 , 0 0 40px #18FF00 , 0 0 60px #18FF00 , 0 0 10px #18FF00 , 0 0 98px #18FF00 ',
		
	// 	// textShadow: '0 0 7px #fff,0 0 10px #fff,0 0 21px #fff,0 0 42px #0fa,0 0 82px #0fa,0 0 92px #0fa,0 0 102px #0fa,0 0 151px #0fa',
	// };
	
  return (
    <Box
      
      display="flex"
      flexDirection='column'
      // justifyContent="center"
      alignItems="center"
      justifyContent='center'
      px={10}
      gap={4}
      bgcolor='#131313'
      flexGrow={1}
      
    >
           
      
      <Box
      display='flex'
      
      
      >
      <img
        alt="SVG Image"
        src={icono3}  style={{ width: '100%', height: 'auto' }}
      />
      </Box>

      {/* <Box
      display='flex'
      >
      <Typography fontFamily='"Ubuntu", sans-serif'
				style={customStyles}
			>
				ProPlay
			</Typography>
      </Box> */}
      
      
      
    </Box>
  );
};

export default Image;
