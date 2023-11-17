import {
  Box,
  Button,
  FormControl,
  FormControlLabel,
  FormHelperText,
  FormLabel,
  Radio,
  RadioGroup,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const questions = [
  {
    content: "pregunta 1",
    options: [
      { content: "a", id: "a" },
      { content: "b", id: "b" },
      { content: "c", id: "c" },
      { content: "d", id: "d" },
    ],
    right: "a",
  },
  {
    content: "pregunta 2",
    options: [
      { content: "a", id: "a" },
      { content: "b", id: "b" },
      { content: "c", id: "c" },
      { content: "d", id: "d" },
    ],
    right: "a",
  },
];

const Quiz = () => {
  const navigate = useNavigate();
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const currentQuestion = questions[currentQuestionIndex];
  const [answer, setAnswer] = useState("");

  const [results, setResults] = useState([]);

  const handleRadioChange = (event) => {
    setAnswer(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    setResults((results) => [
      ...results,
      {
        question: currentQuestion.content,
        answer,
        right: currentQuestion.right === answer,
      },
    ]);

    setAnswer("");

    setCurrentQuestionIndex((currentQuestionIndex) => currentQuestionIndex + 1);
  };

  return (
    <>
      <Box
        bgcolor="gray"
        display="flex"
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
        p={5}
        gap={2}
      >
        {currentQuestionIndex < questions.length ? (
          <>
            <Box>{currentQuestion.content}</Box>
            <Box display="flex" bgcolor="green">
              <form onSubmit={handleSubmit}>
                <FormControl sx={{ m: 3, gap: 2 }} variant="standard">
                  <Box
                    display="flex"
                    // gap={5}
                    justifyContent="space-between"
                  >
                    <RadioGroup
                      aria-labelledby="demo-error-radios"
                      name="quiz"
                      value={answer}
                      onChange={handleRadioChange}
                      // sx={{display:'flex', flexDirection:'colum'}}
                    >
                      {currentQuestion.options.map((option) => (
                        <FormControlLabel
                          value={option.id}
                          control={<Radio />}
                          label={option.content}
                        />
                      ))}
                    </RadioGroup>
                  </Box>

                  <Box>
                    {/* <Button sx={{ mt: 1, mr: 1 }} type="submit" variant="outlined">
            Check Answer
          </Button> */}
                    <Button
                      sx={{ mt: 1, mr: 1 }}
                      variant="outlined"
                      type="submit"
                      disabled={answer.length === 0}
                    >
                      Siguiente
                    </Button>
                  </Box>
                </FormControl>
              </form>
            </Box>
          </>
        ) : (
          <div>
            {results.map((result) => (
              <>
                <Typography>{result.question}</Typography>
                <Typography>{result.answer} </Typography>
                <Typography>{result.right ? "nice" : "bad"}</Typography>
              </>
            ))}
          </div>
        )}
      </Box>
    </>
  );
};

export default Quiz;
