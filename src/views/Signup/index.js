import {
  Box,
  Button,
  Container,
  Stack,
  TextField,
  Typography,
  Link,
} from "@mui/material";
import { useState } from 'react'
import { useNavigate } from "react-router-dom";


const Signup = () => {
  const [credentials, setCredentials] = useState({
    user: "",
    email: "",
    password: "",
  });

  const navigate = useNavigate()

  const signup = () => {
    if(credentials.user!=="" && credentials.email!=="" && credentials.password!=="") return navigate('/login')
  };

  return (
    <>
      <Container component="main" maxWidth="md" sx={{ p: 10 }}>
        <Box
          borderRadius={7}
          display="flex"
          flexDirection="column"
          p={0}
          alignItems="center"
          justifyContent="center"
          gap={8}
          sx={{ bgcolor: "grey.400", height: "80vh" }}
        >
          <Box
            display="flex"
            flexDirection="column"
            alignItems="center"
            gap={4}
          >
            <Typography component="h1" variant="h4">
              Create An Acount
            </Typography>
            <Typography variant="body2">
              Create an account to enjoy all the <br /> services without any ads
              for free!
            </Typography>
          </Box>

          <Stack
            maxWidth={500}
            spacing={{ sm: 3 }}
            direction="row"
            useFlexGap
            flexWrap="wrap"
          >
            <TextField
              autoComplete="fname"
              name="user"
              variant="outlined"
              required
              fullWidth
              id="user"
              label="User"
              autoFocus
              value={credentials.user}
              onChange={(event) =>
                setCredentials((credentials) => ({
                  ...credentials,
                  user: event.target.value,
                }))
              }
            />
            <TextField
              autoComplete="fname"
              name="email"
              variant="outlined"
              required
              fullWidth
              id="email"
              label="E-mail"
              autoFocus
              value={credentials.email}
              onChange={(event) =>
                setCredentials((credentials) => ({
                  ...credentials,
                  email: event.target.value,
                }))
              }
            />
            <TextField
              autoComplete="fname"
              name="password"
              variant="outlined"
              required
              fullWidth
              id="password"
              label="Password"
              autoFocus
              value={credentials.password}
              onChange={(event) =>
                setCredentials((credentials) => ({
                  ...credentials,
                  password: event.target.value,
                }))
              }
            />
          </Stack>
          <Box
            display='flex'
            flexDirection='column'
            gap={2}
          >
          <Button
            type="submit"
            variant="contained"
            color="primary"
            onClick={signup}
          >
            Sign Up
          </Button>
          <Link href="/login" variant="body2">
          Already have an account? Sign in</Link>
          </Box>
        </Box>
      </Container>
    </>
  );
};

export default Signup;
