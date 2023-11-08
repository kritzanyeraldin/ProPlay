import { Box, Button, TextField, Typography } from '@mui/material'
import React from 'react'

export const addCourse = () => {
  return (
    <>
    <Box
      bgcolor='grey.200'
      display='flex'
      flexDirection='column'
      alignItems='center'
      gap={5}
      py={2}
    >
    <Box

    >
      <Typography>Create Course</Typography>
    </Box>
    <Box
    
      component="form"
      sx={{
        '& > :not(style)': { m: 1, width: '40ch' },
      }}
      noValidate
      autoComplete="off"
      display='flex'
      flexDirection='column'
      gap={2}
    >



        <TextField label="Name" color="primary" focused />
        <TextField sx={{height:'10ch'}} label="Description" color="primary" focused />


      </Box>

      <Button variant='contained'>Siguiente</Button>
      </Box>
      </>
  )
}

export default addCourse