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

  const handleSave = async () => {
    setIsEditing(false);
    saveUser(user);
    saveEmail(email);
    // Realizar la solicitud POST al backend
    try {
      const response = await fetch('URL_DEL_BACKEND/api/user', {
        method: 'PUT', // Método HTTP para actualizar datos
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name: user, email }), // Datos a enviar al backend
      });

      if (response.ok) {
        console.log('Datos actualizados exitosamente');
        // Aquí podrías realizar acciones adicionales si la actualización fue exitosa
      } else {
        console.error('Error al actualizar los datos');
      }
    } catch (error) {
      console.error('Error de red:', error);
    }
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