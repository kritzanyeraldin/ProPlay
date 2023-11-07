import React from 'react';
import { Box, Button, Typography } from '@mui/material';

const Profile = () => {
  const columnStyle = {
    display: 'flex',
    width: '50%',
    flexDirection: 'column',
    alignItems: 'center',
  };

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
  

  return (
    <Box display="flex" width="80%" height="80vh" justifyContent="space-around" className="profile-container">
      <Box className="column" style={columnStyle}>
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
          <Button variant="contained" color="primary">
            Editar
          </Button>
        </Box>
      </Box>
      <Box className="column" style={columnStyle}>
        <Box style={roundedBoxStyle} className="user-preferences">
          <Typography variant="h4">Mis Preferencias</Typography>
          <ul>
            <li>Opción 1</li>
            <li>Opción 2</li>
            <li>Opción 3</li>
          </ul>
          <Button variant="contained" color="primary">
            Actualizar
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default Profile;

