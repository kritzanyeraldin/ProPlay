import React from 'react';
import { Box, Button, Typography } from '@mui/material';

const UserInfo = () => {
  const roundedBoxStyle = {
    width: '90%',
    border: '1px solid #ccc',
    borderRadius: '10px',
    padding: '10px',
    marginBottom: '20px',
  };

  const avatarStyle = {
    maxWidth: 150,
  };

  const buttonStyle = {
    margin: '5px',
    variant: "contained",
    color: "#000000DE",
    backgroundColor: '#9E9E9E',
  };

  return (
    <Box style={roundedBoxStyle} className="user-info">
      <Box className="user-avatar">
        <img
          src="https://www.munichurcampa.gob.pe/wp-content/uploads/2023/01/1665282759496710_c5_720x720.jpeg"
          alt="Avatar"
          style={avatarStyle}
        />
      </Box>
      <Box className="user-details">
        <Typography variant="body1">User: Nombre del usuario</Typography>
        <Typography variant="body1">Email: correo@ejemplo.com</Typography>
      </Box>
      <Button style={buttonStyle}>
        Editar
      </Button>
    </Box>
  );
};

export default UserInfo;
