import React, { useState } from 'react';
import { Box, Typography, TextField, Button, FormControlLabel, RadioGroup, Radio, FormControl, FormLabel, Checkbox } from '@mui/material';


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
        <FormLabel component="legend" style={{color:"black"}}>¿La interfaz web fue fácil de navegar?</FormLabel>
        <RadioGroup
          row
          name="usability"
          value={usability}
          onChange={(event) => setUsability(event.target.value)}
        >
          <FormControlLabel value="Muy difícil" control={<Radio style={{color:"black"}}/>} label="Muy difícil" />
          <FormControlLabel value="Difícil" control={<Radio style={{color:"black"}}/>} label="Difícil" />
          <FormControlLabel value="Neutro" control={<Radio style={{color:"black"}}/>} label="Neutro" />
          <FormControlLabel value="Fácil" control={<Radio style={{color:"black"}}/>} label="Fácil" />
          <FormControlLabel value="Muy fácil" control={<Radio style={{color:"black"}}/>} label="Muy fácil" />
        </RadioGroup>
      </FormControl>

      <FormControl fullWidth component="fieldset">
        <FormLabel component="legend" style={{color:"black"}}>¿Cómo calificarías el diseño y la apariencia visual de la interfaz web?</FormLabel>
        <RadioGroup
          row
          name="design"
          value={design}
          onChange={(event) => setDesign(event.target.value)}
        >
          <FormControlLabel value="Muy poco atractivo" control={<Radio style={{color:"black"}}/>} label="Muy poco atractivo" />
          <FormControlLabel value="Poco atractivo" control={<Radio style={{color:"black"}}/>} label="Poco atractivo" />
          <FormControlLabel value="Neutro" control={<Radio style={{color:"black"}}/>} label="Neutro" />
          <FormControlLabel value="Atractivo" control={<Radio style={{color:"black"}}/>} label="Atractivo" />
          <FormControlLabel value="Muy Atractivo" control={<Radio style={{color:"black"}}/>} label="Muy Atractivo" />
        </RadioGroup>
      </FormControl>

      <FormControl fullWidth component="fieldset">
        <FormLabel component="legend" style={{color:"black"}}>¿La interfaz web proporcionó la información que estabas buscando de manera clara y comprensible?</FormLabel>
        <RadioGroup
          row
          name="clarity"
          value={clarity}
          onChange={(event) => setClarity(event.target.value)}
        >
          <FormControlLabel value="Nada clara" control={<Radio style={{color:"black"}}/>} label="Nada clara" />
          <FormControlLabel value="Poco clara" control={<Radio style={{color:"black"}}/>} label="Poco clara" />
          <FormControlLabel value="Neutro" control={<Radio style={{color:"black"}}/>} label="Neutro" />
          <FormControlLabel value="Clara" control={<Radio style={{color:"black"}}/>} label="Clara" />
          <FormControlLabel value="Muy clara" control={<Radio style={{color:"black"}}/>} label="Muy clara" />
        </RadioGroup>
      </FormControl>

      <FormControl fullWidth component="fieldset">
        <FormLabel component="legend" style={{color:"black"}}>¿La página web se cargó rápidamente?</FormLabel>
        <RadioGroup
          row
          name="speed"
          value={speed}
          onChange={(event) => setSpeed(event.target.value)}
        >
          <FormControlLabel value="Muy Lenta" control={<Radio style={{color:"black"}}/>} label="Muy Lenta" />
          <FormControlLabel value="Lenta" control={<Radio style={{color:"black"}}/>} label="Lenta" />
          <FormControlLabel value="Neutro" control={<Radio style={{color:"black"}}/>} label="Neutro" />
          <FormControlLabel value="Rápida" control={<Radio style={{color:"black"}}/>} label="Rápida" />
          <FormControlLabel value="Muy Rápida" control={<Radio style={{color:"black"}}/>} label="Muy Rápida" />
        </RadioGroup>
      </FormControl>

      <FormControl fullWidth component="fieldset" style={{color:"black"}}>
        <FormLabel component="legend">¿La navegación por el sitio web fue intuitiva y lógica?</FormLabel>
        <RadioGroup
          row
          name="navigation"
          value={navigation}
          onChange={(event) => setNavigation(event.target.value)}
        >
          <FormControlLabel value="Muy Confusa" control={<Radio style={{color:"black"}}/>} label="Muy Confusa" />
          <FormControlLabel value="Confusa" control={<Radio style={{color:"black"}}/>} label="Confusa" />
          <FormControlLabel value="Neutro" control={<Radio style={{color:"black"}}/>} label="Neutro" />
          <FormControlLabel value="Intuitiva" control={<Radio style={{color:"black"}}/>} label="Intuitiva" />
          <FormControlLabel value="Muy Intuitiva" control={<Radio style={{color:"black"}}/>} label="Muy Intuitiva" />
        </RadioGroup>
      </FormControl>

      <FormControl fullWidth component="fieldset">
        <FormLabel component="legend" style={{color:"black"}}>¿Las características y funciones del sitio web funcionaron como esperabas?</FormLabel>
        <RadioGroup
          row
          name="functionality"
          value={functionality}
          onChange={(event) => setFunctionality(event.target.value)}
        >
          <FormControlLabel value="No funcionaron en absoluto" control={<Radio style={{color:"black"}}/>} label="No funcionaron en absoluto" />
          <FormControlLabel value="Tuvieron problemas" control={<Radio style={{color:"black"}}/>} label="Tuvieron problemas" />
          <FormControlLabel value="Funcionaron en su mayoría" control={<Radio style={{color:"black"}}/>} label="Funcionaron en su mayoría" />
          <FormControlLabel value="Funcionaron bien" control={<Radio style={{color:"black"}}/>} label="Funcionaron bien" />
          <FormControlLabel value="Funcionaron perfectamente" control={<Radio style={{color:"black"}}/>} label="Funcionaron perfectamente" />
        </RadioGroup>
      </FormControl>

      <FormControl fullWidth component="fieldset">
        <FormLabel component="legend" style={{color:"black"}}>En general, ¿cómo calificarías tu experiencia con la interfaz web?</FormLabel>
        <RadioGroup
          row
          name="overallExperience"
          value={overallExperience}
          onChange={(event) => setOverallExperience(event.target.value)}
        >
          <FormControlLabel value="Muy negativa" control={<Radio style={{color:"black"}}/>} label="Muy negativa" />
          <FormControlLabel value="Negativa" control={<Radio style={{color:"black"}}/>} label="Negativa" />
          <FormControlLabel value="Neutro" control={<Radio style={{color:"black"}}/>} label="Neutro" />
          <FormControlLabel value="Positiva" control={<Radio style={{color:"black"}}/>} label="Positiva" />
          <FormControlLabel value="Muy Positiva" control={<Radio style={{color:"black"}}/>} label="Muy Positiva" />
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
