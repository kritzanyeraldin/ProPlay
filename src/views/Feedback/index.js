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

      <FormControl fullWidth component="fieldset">
        <FormLabel component="legend">¿La interfaz web fue fácil de navegar?</FormLabel>
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

      <FormControl fullWidth component="fieldset">
        <FormLabel component="legend">¿Cómo calificarías el diseño y la apariencia visual de la interfaz web?</FormLabel>
        <RadioGroup
          row
          name="usability"
          value={usability}
          onChange={(event) => setUsability(event.target.value)}
        >
          <FormControlLabel value="Muy poco atractivo" control={<Radio />} label="Muy poco atractivo" />
          <FormControlLabel value="Poco atractivo" control={<Radio />} label="Poco atractivo" />
          <FormControlLabel value="Neutro" control={<Radio />} label="Neutro" />
          <FormControlLabel value="Atractivo" control={<Radio />} label="Atractivo" />
          <FormControlLabel value="Muy Atractivo" control={<Radio />} label="Muy Atractivo" />
        </RadioGroup>
      </FormControl>

      <FormControl fullWidth component="fieldset">
        <FormLabel component="legend">¿La interfaz web proporcionó la información que estabas buscando de manera clara y comprensible?</FormLabel>
        <RadioGroup
          row
          name="usability"
          value={usability}
          onChange={(event) => setUsability(event.target.value)}
        >
          <FormControlLabel value="Nada clara" control={<Radio />} label="Nada clara" />
          <FormControlLabel value="Poco clara" control={<Radio />} label="Poco clara" />
          <FormControlLabel value="Neutro" control={<Radio />} label="Neutro" />
          <FormControlLabel value="Clara" control={<Radio />} label="Clara" />
          <FormControlLabel value="Muy clara" control={<Radio />} label="Muy clara" />
        </RadioGroup>
      </FormControl>

      <FormControl fullWidth component="fieldset">
        <FormLabel component="legend">¿La página web se cargó rápidamente?</FormLabel>
        <RadioGroup
          row
          name="usability"
          value={usability}
          onChange={(event) => setUsability(event.target.value)}
        >
          <FormControlLabel value="Muy Lenta" control={<Radio />} label="Muy Lenta" />
          <FormControlLabel value="Lenta" control={<Radio />} label="Lenta" />
          <FormControlLabel value="Neutro" control={<Radio />} label="Neutro" />
          <FormControlLabel value="Rápida" control={<Radio />} label="Rápida" />
          <FormControlLabel value="Muy Rápida" control={<Radio />} label="Muy Rápida" />
        </RadioGroup>
      </FormControl>

      <FormControl fullWidth component="fieldset">
        <FormLabel component="legend">¿La navegación por el sitio web fue intuitiva y lógica?</FormLabel>
        <RadioGroup
          row
          name="usability"
          value={usability}
          onChange={(event) => setUsability(event.target.value)}
        >
          <FormControlLabel value="Muy Confusa" control={<Radio />} label="Muy Confusa" />
          <FormControlLabel value="Confusa" control={<Radio />} label="Confusa" />
          <FormControlLabel value="Neutro" control={<Radio />} label="Neutro" />
          <FormControlLabel value="Intuitiva" control={<Radio />} label="Intuitiva" />
          <FormControlLabel value="Muy Intuitiva" control={<Radio />} label="Muy Intuitiva" />
        </RadioGroup>
      </FormControl>

      <FormControl fullWidth component="fieldset">
        <FormLabel component="legend">¿Las características y funciones del sitio web funcionaron como esperabas?</FormLabel>
        <RadioGroup
          row
          name="usability"
          value={usability}
          onChange={(event) => setUsability(event.target.value)}
        >
          <FormControlLabel value="No funcionaron en absoluto" control={<Radio />} label="No funcionaron en absoluto" />
          <FormControlLabel value="Tuvieron problemas" control={<Radio />} label="Tuvieron problemas" />
          <FormControlLabel value="Funcionaron en su mayoría" control={<Radio />} label="Funcionaron en su mayoría" />
          <FormControlLabel value="Funcionaron bien" control={<Radio />} label="Funcionaron bien" />
          <FormControlLabel value="Funcionaron perfectamente" control={<Radio />} label="Funcionaron perfectamente" />
        </RadioGroup>
      </FormControl>

      <FormControl fullWidth component="fieldset">
        <FormLabel component="legend">En general, ¿cómo calificarías tu experiencia con la interfaz web?</FormLabel>
        <RadioGroup
          row
          name="usability"
          value={usability}
          onChange={(event) => setUsability(event.target.value)}
        >
          <FormControlLabel value="Muy negativa" control={<Radio />} label="Muy negativa" />
          <FormControlLabel value="Negativa" control={<Radio />} label="Negativa" />
          <FormControlLabel value="Neutro" control={<Radio />} label="Neutro" />
          <FormControlLabel value="Positiva" control={<Radio />} label="Positiva" />
          <FormControlLabel value="Muy Positiva" control={<Radio />} label="Muy Positiva" />
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
