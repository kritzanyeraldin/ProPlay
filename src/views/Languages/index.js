import React from 'react';
import { Box, Button } from '@mui/material';

const Languages = () => {
  const languages = [
    {
      id: 1,
      name: 'Python',
      image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Python-logo-notext.svg/800px-Python-logo-notext.svg.png',
    },
    {
      id: 2,
      name: 'JavaScript',
      image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/1200px-Unofficial_JavaScript_logo_2.svg.png',
    },
    // Agrega más lenguajes según sea necesario
  ];

  const languageBoxStyle = {
    width: '250px', // Ajusta el ancho de cada caja
    border: '1px solid #ccc',
    borderRadius: '10px',
    padding: '10px',
    margin: '10px',
    textAlign: 'center',
  };

  const imageStyle = {
    width: '200px',
    height: '200px',
  };

  const h2Style = {
    textAlign: 'center', // Centrar horizontalmente el h2
  };

  const buttonStyle = {
    margin: '5px',
    variant: "contained",
    color: "#000000DE",
    backgroundColor: '#9E9E9E',
  };

  return (
    <div>
      <h2 style={h2Style}>¿Qué lenguaje deseas aprender?</h2>
      <Box display="flex" flexWrap="wrap">
        {languages.map((language) => (
          <Box key={language.id} style={languageBoxStyle}>
            <img
              src={language.image}
              alt={`Lenguaje: ${language.name}`}
              style={imageStyle}
            />
            <Button style={buttonStyle}>
              Ver más
            </Button>
          </Box>
        ))}
      </Box>
    </div>
  );
};

export default Languages;

