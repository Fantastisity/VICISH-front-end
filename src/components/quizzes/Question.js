import React from "react";
import {Card1, Card2} from "./Card";
import { useState } from "react";
import "./Question.css";
import {
  Button
} from '@material-ui/core';
export const SlangQuestion = ({
  questionIndex,
  setQuestionIndex,
  questions,
  setShowQuestionsPage,
  setShowFinalPage,
  score,
  setScore,
  handleRecord
}) => {
  const handleClick = (isCorrect) => {
    if (questionIndex < 9) {
      if (isCorrect) {
        setScore((score) => (score += 1));
        handleRecord(questionIndex + 1)
      }

      setQuestionIndex((prevIndex) => prevIndex + 1);
    } else {
      if (isCorrect) {
        setScore((score) => (score += 1));
        handleRecord(questionIndex + 1)
      }

      setShowQuestionsPage(false);
      setShowFinalPage(true);
    }
  };

  return (
    <Card1>
      <h1 className="question">{questions[questionIndex].questionText}</h1>

      <div className="answers">
        {questions[questionIndex].answers.map((answer, i) => (
          <div
            key={i}
            className="answer"
            onClick={() => handleClick(answer.correctAnswer)}
          >
            <p style={{fontSize: "20px"}}>{answer.answerText}</p>
          </div>
        ))}
      </div>

      <p className="score">
        Score: <span>{score}</span>
      </p>

      <p className="question_number">
        Question <span>{questionIndex + 1}</span>/10
      </p>
    </Card1>
  );
};

export const EnglishQuestion = ({
  questionIndex,
  setQuestionIndex,
  questions,
  setShowQuestionsPage,
  setShowFinalPage,
  score,
  setScore,
  answers,
  handleRecord
}) => {
  const [showAnswers, setShowAnswers] = useState(false);
  const handleClick = (selectedAns) => {
    if (!showAnswers) {
      if (answers[questionIndex].ans === selectedAns) {
        setScore((score) => (score += 1));
        handleRecord(questionIndex + 1)
      }
    }
    setShowAnswers(true);
  };

  const handleNextQuestion = () => {
    setQuestionIndex((prevIndex) => prevIndex + 1);
    setShowAnswers(false);
    if (questionIndex === 9) {
      setShowQuestionsPage(false);
      setShowFinalPage(true);
    }
  }

  const handleQues = () => {
      const finalButton = questionIndex === 9 ? "Finish" : "Next Question";
      return (
        <div style={{position: 'absolute', marginTop: "5%", left: "15%", width: "70%"}}>
          <p style={{color: "#1b3a85", fontSize: "20px", textAlign: "center"}}>
            Explaination: {questions[questionIndex].solution}</p>
          <div style={{textAlign: "center"}}>
          <Button 
          color="primary" 
          variant="outlined"
          style={{color: "#1b3a85", fontSize: "17px"}}
          onClick = {handleNextQuestion}>{finalButton}</Button>
          </div>
          </div>
      )
  }

  return (
    <Card2>
      <h1 className="question" style={{fontSize: "25px"}}>{questions[questionIndex].questionText}</h1>

      <div className="answers">
        {questions[questionIndex].answers.map((answer, i) => {
          const col = showAnswers ? (
            answer.answerText === answers[questionIndex].ans ? "#08c73b": "#c70808"
        ) : "";
          return (<div
            key={i}
            className="answer"
            style={{color: `${col}`}}
            onClick={() => handleClick(answer.answerText)}
          >
            <p  style={{fontSize: "20px"}}>{answer.answerText}</p>
          </div>
          )
        })}
      </div>
      {showAnswers && <>{handleQues()}</>}
      <p className="score">
        Score: <span>{score}</span>
      </p>

      <p className="question_number">
        Question <span>{questionIndex + 1}</span>/10
      </p>
    </Card2>
  );
};
