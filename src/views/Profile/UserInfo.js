import React, { useState } from 'react';
import { Box, Button, Typography, TextField } from '@mui/material';

const UserInfo = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [user, setUser] = useState('Nombre del usuario');
  const [email, setEmail] = useState('correo@ejemplo.com');

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

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleSave = () => {
    setIsEditing(false);
    saveUser(user);
    saveEmail(email);
  };

  const saveUser = (newUser) => {
    // Simulando la llamada a una API o base de datos para guardar el nuevo usuario
    console.log(`Usuario guardado: ${newUser}`);
  };

  const saveEmail = (newEmail) => {
    // Simulando la llamada a una API o base de datos para guardar el nuevo correo electrónico
    console.log(`Correo electrónico guardado: ${newEmail}`);
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
        {isEditing ? (
          <>
            <TextField
              label="User"
              value={user}
              onChange={(e) => setUser(e.target.value)}
            />
            <TextField
              label="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </>
        ) : (
          <>
            <Typography variant="body1">User: {user}</Typography>
            <Typography variant="body1">Email: {email}</Typography>
          </>
        )}
      </Box>
      {isEditing ? (
        <Button style={buttonStyle} onClick={handleSave}>
          Guardar
        </Button>
      ) : (
        <Button style={buttonStyle} onClick={handleEdit}>
          Editar
        </Button>
      )}
    </Box>
  );
};

export default UserInfo;