import React, { useState } from 'react';
import { Box, Container, Paper, TextField, Button, Typography, List, ListItem, ListItemText } from '@mui/material';


const Foro = () => {
  const [questions, setQuestions] = useState([]);
  const [newQuestion, setNewQuestion] = useState('');
  const [newAnswer, setNewAnswer] = useState('');

  const handleAskQuestion = () => {
    if (newQuestion) {
      setQuestions([...questions, { text: newQuestion, answers: [] }]);
      setNewQuestion('');
    }
  };

  const handleAnswerQuestion = (index, answer) => {
    if (answer) {
      const newQuestions = [...questions];
      newQuestions[index].answers.push(answer);
      setQuestions(newQuestions);
      setNewAnswer('');
    }
  };

  return (
    <Container>
      <Box mt={3}>
        <Typography variant="h4" gutterBottom>
          Foro
        </Typography>
        <TextField
          value={newQuestion}
          variant="outlined"
          fullWidth
          onChange={(e) => setNewQuestion(e.target.value)}
          placeholder="Escribe tu pregunta aquí"
        />
        <Button variant="contained" color="primary" onClick={handleAskQuestion}>
          Pregunta
        </Button>
        <List style={{ marginTop: '20px' }}>
          {questions.map((question, index) => (
            <Paper key={index}>
              <List>
                <ListItem>
                  <ListItemText primaryTypographyProps={{ style: { fontWeight: 'bold' } }} primary={question.text} />
                </ListItem>
                {question.answers.map((answer, answerIndex) => (
                  
                  <ListItem key={answerIndex}>
                    <ListItemText primary={answer} />
                  </ListItem>
                ))}
                <ListItem>
                  <TextField
                    value={newAnswer}
                    variant="outlined"
                    fullWidth
                    onChange={(e) => setNewAnswer(e.target.value)}
                    placeholder="Escribe tu respuesta aquí"
                  />
                  <Button
                    variant="contained" color="primary"
                    onClick={() => handleAnswerQuestion(index, newAnswer)}
                  >
                    Responder
                  </Button>
                </ListItem>
              </List>
            </Paper>
          ))}
        </List>
      </Box>
    </Container>
  );
};

export default Foro;
