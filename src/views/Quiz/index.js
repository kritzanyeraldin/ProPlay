import { Box, Button, FormControl, FormControlLabel, FormHelperText, FormLabel, Radio, RadioGroup } from '@mui/material'
import React from 'react'

const Quiz = () => {
  const [value, setValue] = React.useState('');
  const [error, setError] = React.useState(false);
  const [helperText, setHelperText] = React.useState('Choose wisely');

  const handleRadioChange = (event) => {
    setValue(event.target.value);
    setHelperText(' ');
    setError(false);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (value === 'best' || value==='c') {
      setHelperText('You got it!');
      setError(false);
    } else if (value === 'worst' || value==='d') {
      setHelperText('Sorry, wrong answer!');
      setError(true);
    } else {
      setHelperText('Please select an option.');
      setError(true);
    }
  };



  return (
    <>
      <Box
      bgcolor='gray'
      display='flex'
      flexDirection='column'
      alignItems='center'
      justifyContent='center'
      p={5}
      gap={2}
      >
        <Box>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </Box>
        <Box
        display='flex'
        
        bgcolor='green'
        >
        <form onSubmit={handleSubmit}>
      <FormControl sx={{ m: 3, gap:2 }} error={error} variant="standard" >
        <Box
        display='flex'
        // gap={5}
        justifyContent='space-between'
        >
        <RadioGroup
          aria-labelledby="demo-error-radios"
          name="quiz"
          value={value}
          onChange={handleRadioChange}
          // sx={{display:'flex', flexDirection:'colum'}}
        >
          <FormControlLabel value="best" control={<Radio />} label="The best!" />
          <FormControlLabel value="worst" control={<Radio />} label="The worst." />
          {/* <FormControlLabel value="c" control={<Radio/>} label="The best"/>
          <FormControlLabel value="d" control={<Radio />} label="The worst." /> */}
        </RadioGroup>
        <RadioGroup
          aria-labelledby="demo-error-radios"
          name="quiz"
          value={value}
          onChange={handleRadioChange}
          // sx={{display:'flex', flexDirection:'colum'}}
        >
          
          <FormControlLabel value="c" control={<Radio/>} label="The best"/>
          <FormControlLabel value="d" control={<Radio />} label="The worst." />
        </RadioGroup>
        </Box>

        <FormHelperText>{helperText}</FormHelperText>

        <Box >
        <Button sx={{ mt: 1, mr: 1 }} type="submit" variant="outlined">
          Check Answer
        </Button>
        <Button sx={{ mt: 1, mr: 1 }}  variant="outlined">
          Siguiente
        </Button>
        </Box>
      </FormControl>
    </form>
    </Box>
      </Box>
    </>
  )
}

export default Quiz
