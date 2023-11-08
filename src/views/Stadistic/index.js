import React from 'react';
import { Box, Typography } from '@mui/material';
import imagen from './img/notas_por_mes.png';
import imagen2 from './img/tiempo_por_lenguaje.png';

const Stadistic = () => {
  return (
    <div>
      <Box display="flex" alignItems="center" justifyContent="center" flexDirection="column">
        <div>
          <Typography variant="h4">Rendimiento por mes</Typography>
          <img src={imagen} alt="Rendimiento por mes" />
        </div>
        <div>
          <Typography variant="h4">Horas estudiadas por lenguaje</Typography>
          <img src={imagen2} alt="Horas estudiadas por lenguaje" />
        </div>
      </Box>
    </div>
  );
};

export default Stadistic;

