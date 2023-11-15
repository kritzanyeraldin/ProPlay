import {
  Box,
  Button,
  FormControl,
  IconButton,
  InputAdornment,
  InputLabel,
  OutlinedInput,
  TextField,
  Typography,
  
} from "@mui/material";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { MOCKED_ADMIN, MOCKED_USER } from "../../../../config/constants";
import { Visibility, VisibilityOff } from "@mui/icons-material";


const Form = () => {
  const [showPassword, setShowPassword] = useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const [credentials, setCredentials] = useState({
    user: "",
    password: "",
  });
  const navigate = useNavigate();

  const login = () => {
    let user;
    // TODO: validate credentials (email, password)
    if (
      MOCKED_USER.user === credentials.user &&
      MOCKED_USER.password === credentials.password
    )
      user = MOCKED_USER;
    else if (
      MOCKED_ADMIN.user === credentials.user &&
      MOCKED_ADMIN.password === credentials.password
    )
      user = MOCKED_ADMIN;

    if (!user) return alert("No se pudo logear correctamente");

    localStorage.setItem("user", JSON.stringify(user));
    if (user.isAdmin) return navigate("/course");
    if (!user.isAdmin) return navigate("/menu");
  };

  return (
    <Box
      flexGrow={1}
      display="flex"
      justifyContent="center"
      alignItems="center"
    >
      <Box display="flex" flexDirection="column" width={400} py={10}>
        <Box
          display="flex"
          flexDirection="column"
          gap={2}
          alignItems="center"
          justifyContent="space-around"
          bgcolor="grey.300"
          p={2}
          height={200}
        >
          <Typography fontSize={24} fontWeight="bold">
            Welcome
          </Typography>
          <Button
            variant="contained"
            color="secondary"
            sx={{
              alignSelf: "flex-end",
            }}
            LinkComponent={Link}
            to={"/signup"}
          >
            Create account
          </Button>
        </Box>
        <Box
          display="flex"
          flexDirection="column"
          bgcolor="grey.500"
          p={2}
          gap={2}
          justifyContent="center"
          height={300}
        >
          <TextField
            fullWidth
            label="User"
            value={credentials.user}
            onChange={(event) =>
              setCredentials((credentials) => ({
                ...credentials,
                user: event.target.value,
              }))
            }
          />
          <FormControl
            sx={{ m: 1, width: "25" }}
            variant="outlined"
            color="primary"
          >
            <InputLabel htmlFor="outlined-adornment-password">
              Password
            </InputLabel>
            <OutlinedInput
              id="outlined-adornment-password"
              type={showPassword ? "text" : "password"}
              value={credentials.password}
              onChange={(event) =>
                setCredentials((credentials) => ({
                  ...credentials,
                  password: event.target.value,
                }))
              }
              endAdornment={
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={handleClickShowPassword}
                    onMouseDown={handleMouseDownPassword}
                    edge="end"
                  >
                    {showPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              }
              label="Password"
            />
          </FormControl>

          {/* <TextField
						fullWidth
						label='Password'
						type='password'
						value={credentials.password}
						onChange={event =>
							setCredentials(credentials => ({
								...credentials,
								password: event.target.value,
							}))
						}
					/> */}

          <Button
            variant="contained"
            onClick={login}
            sx={{
              alignSelf: "center",
            }}
          >
            Login
          </Button>
        </Box>
        {/* <Link href="/" variant="body2">
          Already have an account? Sign in
        </Link> */}
      </Box>
    </Box>
  );
};

export default Form;
