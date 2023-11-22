import React, { useState } from 'react';
import { TextField, Button, Select, MenuItem, InputLabel, FormControl, Typography } from '@mui/material';

function AddCourse() {
  const [courseData, setCourseData] = useState({
    image: null,
    name: '',
    level: '',
    description: '',
    topics: '',
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setCourseData({
      ...courseData,
      [name]: value,
    });
  };

  const handleImageChange = (event) => {
    const imageFile = event.target.files[0];
    setCourseData({
      ...courseData,
      image: imageFile,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Lógica para manejar/enviar los datos del curso
    console.log(courseData);
  };

  return (
    <form onSubmit={handleSubmit} encType="multipart/form-data">
      <Typography variant="h6">Añadir Curso</Typography>
      <div>
        <input
          type="file"
          accept="image/*"
          name="image"
          onChange={handleImageChange}
        />
      </div>
      <TextField
        label="Nombre del Curso"
        name="name"
        value={courseData.name}
        onChange={handleInputChange}
        fullWidth
        required
        margin="normal"
      />
      <FormControl fullWidth required margin="normal">
        <InputLabel id="level-select-label">Nivel</InputLabel>
        <Select
          labelId="level-select-label"
          id="level-select"
          name="level"
          value={courseData.level}
          onChange={handleInputChange}
        >
          <MenuItem value="basico">Básico</MenuItem>
          <MenuItem value="intermedio">Intermedio</MenuItem>
          <MenuItem value="avanzado">Avanzado</MenuItem>
        </Select>
      </FormControl>
      <TextField
        label="Descripción"
        name="description"
        value={courseData.description}
        onChange={handleInputChange}
        fullWidth
        required
        margin="normal"
        multiline
        rows={4}
      />
      <TextField
        label="Temas (separados por comas)"
        name="topics"
        value={courseData.topics}
        onChange={handleInputChange}
        fullWidth
        required
        margin="normal"
      />
      <Button variant="contained" color="primary" type="submit">
        Agregar Curso
      </Button>
    </form>
  );
}

export default AddCourse;
