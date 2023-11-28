import React from 'react';
import { Typography, Divider, Accordion, AccordionSummary, AccordionDetails, Link,TextField, Button } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const handleSubmit = (event) => {
    event.preventDefault();
    // Aquí puedes manejar la lógica para enviar el formulario
    // Por ejemplo, puedes capturar los valores de los campos del formulario y enviarlos a través de una API o realizar alguna acción específica.
  };

const Help = () => {
  return (
    <div>
      <Typography variant="h4">Centro de Ayuda</Typography>

      <Divider />

      <Accordion>
      <AccordionSummary expandIcon={<ExpandMoreIcon />}>
        <Typography variant="h6">Preguntas Frecuentes</Typography>
      </AccordionSummary>
      <AccordionDetails>
        <div>
          <Typography>
            {/* Aquí puedes incluir preguntas frecuentes */}
            <ul>
              <li>
                <strong>¿Cómo inicio sesión?</strong>
                <br />
                Para iniciar sesión, ve a la página principal y haz clic en el botón "Iniciar Sesión". En caso no tengas una cuenta registrate.
              </li>
              <li>
                <strong>¿Cómo accedo a los cursos?</strong>
                <br />
                Una vez que hayas iniciado sesión, dirígete a la sección "Cursos" en el menú principal y selecciona el curso al que deseas acceder.
              </li>
              {/* ... más preguntas y respuestas ... */}
            </ul>
          </Typography>
        </div>
      </AccordionDetails>
    </Accordion>

      <Accordion>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography variant="h6">Recursos de Aprendizaje</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            {/* Enlaces a recursos útiles */}
            <ul>
              <li>
                <Link href="enlace_a_documentacion" target="_blank" style={{ color: 'black' }}>
                  Documentación oficial de programación
                </Link>
              </li>
              <li>
                <Link href="enlace_a_tutoriales" target="_blank" style={{ color: 'black' }}>
                  Tutoriales en línea
                </Link>
              </li>
              {/* ... más enlaces ... */}
            </ul>
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion>
      <AccordionSummary expandIcon={<ExpandMoreIcon />}>
        <Typography variant="h6">Formulario de Contacto</Typography>
      </AccordionSummary>
      <AccordionDetails>
        <form onSubmit={handleSubmit} style={{ width: '100%' }}>
          <TextField
            label="Nombre"
            variant="outlined"
            margin="normal"
            fullWidth
            required
          />
          <TextField
            label="Correo Electrónico"
            variant="outlined"
            margin="normal"
            fullWidth
            required
            type="email"
          />
          <TextField
            label="Mensaje"
            variant="outlined"
            margin="normal"
            fullWidth
            multiline
            rows={4}
            required
          />
          <Button variant="contained" color="primary" type="submit">
            Enviar
          </Button>
        </form>
      </AccordionDetails>
    </Accordion>
    </div>
  );
};

export default Help;

