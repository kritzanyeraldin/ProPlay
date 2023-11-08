import React, { useState } from 'react';
import { Box, Typography, TextField, Button, Rating, FormControlLabel, RadioGroup, Radio, FormControl, FormLabel, FormGroup, Checkbox } from '@mui/material';

const Feedback = () => {
  const [usability, setUsability] = useState('');
  const [design, setDesign] = useState(0);
  const [clarity, setClarity] = useState(0);
  const [speed, setSpeed] = useState(0);
  const [navigation, setNavigation] = useState(0);
  const [functionality, setFunctionality] = useState(0);
  const [overallExperience, setOverallExperience] = useState(0);
  const [additionalComments, setAdditionalComments] = useState('');
  const [satisfied, setSatisfied] = useState('');

  const handleAdditionalCommentsChange = (event) => {
    setAdditionalComments(event.target.value);
  };

  const handleSubmit = () => {
    // Aquí puedes enviar los datos del cuestionario a tu servidor o realizar otras acciones.
    console.log('Facilidad de Uso:', usability);
    console.log('Diseño y Estética:', design);
    console.log('Claridad de la Información:', clarity);
    console.log('Velocidad de Carga:', speed);
    console.log('Navegación:', navigation);
    console.log('Funcionalidad:', functionality);
    console.log('Experiencia General:', overallExperience);
    console.log('Comentarios Adicionales:', additionalComments);
    console.log('¿Satisfecho?', satisfied);
  };

  return (
    <div>
      <Typography variant="h4">Cuestionario de Feedback</Typography>

      <FormControl component="fieldset">
        <FormLabel component="legend">Facilidad de Uso</FormLabel>
        <RadioGroup
          row
          name="usability"
          value={usability}
          onChange={(event) => setUsability(event.target.value)}
        >
          <FormControlLabel value="Muy difícil" control={<Radio />} label="Muy difícil" />
          <FormControlLabel value="Difícil" control={<Radio />} label="Difícil" />
          <FormControlLabel value="Neutro" control={<Radio />} label="Neutro" />
          <FormControlLabel value="Fácil" control={<Radio />} label="Fácil" />
          <FormControlLabel value="Muy fácil" control={<Radio />} label="Muy fácil" />
        </RadioGroup>
      </FormControl>

      {/* Repite el mismo patrón para las otras preguntas de calificación */}

      <Box>
        <Typography variant="h6">Comentarios Adicionales:</Typography>
        <TextField
          fullWidth
          variant="outlined"
          multiline
          rows={3}
          value={additionalComments}
          onChange={handleAdditionalCommentsChange}
        />
      </Box>

      <FormControlLabel
        control={
          <Checkbox
            checked={satisfied === 'Sí, estoy satisfecho'}
            onChange={(event) => setSatisfied(event.target.checked ? 'Sí, estoy satisfecho' : 'No estoy satisfecho')}
            name="satisfied"
          />
        }
        label="¿Satisfecho?"
      />

      <Box mt={2}>
        <Button variant="contained" color="primary" onClick={handleSubmit}>
          Enviar Feedback
        </Button>
      </Box>
    </div>
  );
};

export default Feedback;
