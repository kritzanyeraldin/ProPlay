import React from 'react';
import { Box, Button, Typography } from '@mui/material';

const UserPreferences = () => {
  const roundedBoxStyle = {
    width: '90%',
    border: '1px solid #ccc',
    borderRadius: '10px',
    padding: '10px',
    marginBottom: '20px',
  };

  const buttonStyle = {
    margin: '5px',
    variant: "contained",
    color: "black",
    backgroundColor: 'grey',
  };

  return (
    <Box style={roundedBoxStyle} className="user-preferences">
      <Typography variant="h4">Mis Preferencias</Typography>
      <ul>
        <li>Opción 1</li>
        <li>Opción 2</li>
        <li>Opción 3</li>
      </ul>
      <Button style={buttonStyle}>
        Actualizar
      </Button>
    </Box>
  );
};

export default UserPreferences;
