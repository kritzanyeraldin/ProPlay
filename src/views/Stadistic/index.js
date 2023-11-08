import React from 'react';
import { Box, Typography } from '@mui/material';

const Stadistic = () => {
  return (
    <div>
      <Box display="flex" alignItems="center" justifyContent="center" flexDirection="column">
        <div>
          <Typography variant="h4">Rendimiento por mes</Typography>
          <img src="notas_por_mes.png" alt="Rendimiento por mes" />
        </div>
        <div>
          <Typography variant="h4">Horas estudiadas por lenguaje</Typography>
          <img src="tiempo_por_lenguaje" alt="Horas estudiadas por lenguaje" />
        </div>
      </Box>
    </div>
  );
};

export default Stadistic;

