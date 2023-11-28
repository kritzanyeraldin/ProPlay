import { Box } from "@mui/material";
import { Form, Image } from "./components";
import { Navigate } from "react-router-dom";
import { getAllowedPaths } from "../../utils";

const Login = () => {
  // const customStyles = {
  // 	fontSize:'80px',
  // 	color: '#84BBFF',
  // 	textShadow: '0 0 5px #67A961 , 0 0 15px #67A961 , 0 0 20px #67A961 , 0 0 40px #67A961 , 0 0 60px #67A961 , 0 0 10px #67A961 , 0 0 98px #67A961 ',

  // 	// textShadow: '0 0 7px #fff,0 0 10px #fff,0 0 21px #fff,0 0 42px #0fa,0 0 82px #0fa,0 0 92px #0fa,0 0 102px #0fa,0 0 151px #0fa',
  // };

  const userAsString = localStorage.getItem("user");

  if (userAsString) {
    const user = JSON.parse(userAsString);
    const allowedPaths = getAllowedPaths(user);

    return <Navigate to={allowedPaths[0]} replace />;
  }

  return (
    <Box
      display="flex"
      flexDirection="row"
      height="100vh"
      bgcolor="primary.main"
    >
      <Image />

      {/* <Box
				display='flex'
				flexGrow={2}
			>
				
					{/* <Typography 
				style={customStyles}
			>
				PROPLAY
			</Typography> */}

      <Form />
      {/* </Box> */}
    </Box>
  );
};

export default Login;
