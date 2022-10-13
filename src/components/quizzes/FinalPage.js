import React from "react";
import {Card1, Card2} from "./Card";

import "./FinalPage.css";

export const FinalSlangPage = ({
  score,
  setShowFinalPage,
  setShowStartingPage,
  topScore,
  questions,
  setTopScore,
  setScore,
  record,
  setAnswerRecord
}) => {
  const handleClick = () => {
    if (score > topScore) {
      setTopScore(score);
    }

    setShowFinalPage(false);
    setShowStartingPage(true);
    setScore(0);
    setAnswerRecord({"q1" : 0, "q2" : 0, "q3" : 0, "q4": 0, "q5" : 0, "q6" : 0, "q7" : 0, "q8" : 0,
    "q9" : 0, "q10" : 0})
  };

  const handleResult = (key, val) => {
    switch (key) {
      case "q1": {
        if (val) return <span style={{color: "green"}}>q1: {questions[0].questionText} correct</span>
        else return (
          <>
          <span style={{color: "#c70808"}}>q1: {questions[0].questionText}</span>
          <br/>
          <span>Correct Answer: {questions[0].answers[0].answerText}</span>
          </>
        )
      }
      case "q2": {
        if (val) return <span style={{color: "green"}}>q2: {questions[1].questionText} correct</span>
        else return (
          <>
          <span style={{color: "#c70808"}}>q2: {questions[1].questionText}</span>
          <br/>
          <span>Correct Answer: {questions[1].answers[2].answerText}</span>
          </>
        )
      }
      case "q3": {
        if (val) return <span style={{color: "green"}}>q3: {questions[2].questionText} correct</span>
        else return (
          <>
          <span style={{color: "#c70808"}}>q3: {questions[2].questionText}</span>
          <br/>
          <span>Correct Answer: {questions[2].answers[0].answerText}</span>
          </>
        )
      }
      case "q4": {
        if (val) return <span style={{color: "green"}}>q4: {questions[3].questionText} correct</span>
        else return (
          <>
          <span style={{color: "#c70808"}}>q4: {questions[3].questionText}</span>
          <br/>
          <span>Correct Answer: {questions[3].answers[1].answerText}</span>
          </>
        )
      }
      case "q5": {
        if (val) return <span style={{color: "green"}}>q5: {questions[4].questionText} correct</span>
        else return (
          <>
          <span style={{color: "#c70808"}}>q5: {questions[4].questionText}</span>
          <br/>
          <span>Correct Answer: {questions[4].answers[1].answerText}</span>
          </>
        )
      }
      case "q6": {
        if (val) return <span style={{color: "green"}}>q6: {questions[5].questionText} correct</span>
        else return (
          <>
          <span style={{color: "#c70808"}}>q6: {questions[5].questionText}</span>
          <br/>
          <span>Correct Answer: {questions[5].answers[2].answerText}</span>
          </>
        )
      }
      case "q7": {
        if (val) return <span style={{color: "green"}}>q7: {questions[6].questionText} correct</span>
        else return (
          <>
          <span style={{color: "#c70808"}}>q7: {questions[0].questionText}</span>
          <br/>
          <span>Correct Answer: {questions[0].answers[3].answerText}</span>
          </>
        )
      }
      case "q8": {
        if (val) return <span style={{color: "green"}}>q8: {questions[7].questionText} correct</span>
        else return (
          <>
          <span style={{color: "#c70808"}}>q8: {questions[7].questionText}</span>
          <br/>
          <span>Correct Answer: {questions[7].answers[2].answerText}</span>
          </>
        )
      }
      case "q9": {
        if (val) return <span style={{color: "green"}}>q9: {questions[8].questionText} correct</span>
        else return (
          <>
          <span style={{color: "#c70808"}}>q9: {questions[8].questionText}</span>
          <br/>
          <span>Correct Answer: {questions[8].answers[2].answerText}</span>
          </>
        )
      }
      case "q10": {
        if (val) return <span style={{color: "green"}}>q10: {questions[9].questionText} correct</span>
        else return (
          <>
          <span style={{color: "#c70808"}}>q10: {questions[9].questionText}</span>
          <br/>
          <span>Correct Answer: {questions[9].answers[3].answerText}</span>
          </>
        )
      }
    }
  }

  return (
    <Card1>
      <h1 className="heading">You reached the end of the game!</h1>

      <h3 className="primary_text">Your final score is:</h3>

      <h3 className="final_score">{score}</h3>
      <br/><br/>
      <div style={{textAlign: "center"}}>{Object.entries(record).map(([key, value]) => (
        <div key={key}>
          {handleResult(key, value)}
        </div>
      ))}</div>

      <button className="play_again_btn" onClick={handleClick}>
        Play Again
      </button>
    </Card1>
  );
};

export const FinalGrammarPage = ({
  score,
  setShowFinalPage,
  setShowStartingPage,
  topScore,
  questions,
  setTopScore,
  setScore,
  record,
  setAnswerRecord
}) => {
  const handleClick = () => {
    if (score > topScore) {
      setTopScore(score);
    }

    setShowFinalPage(false);
    setShowStartingPage(true);
    setScore(0);
    setAnswerRecord({"q1" : 0, "q2" : 0, "q3" : 0, "q4": 0, "q5" : 0, "q6" : 0, "q7" : 0, "q8" : 0,
    "q9" : 0, "q10" : 0})
  };

  const handleResult = (key, val) => {
    switch (key) {
      case "q1": {
        if (val) return <span style={{color: "green"}}>q1: {questions[0].questionText} correct</span>
        else return (
          <>
          <span style={{color: "#c70808"}}>q1: {questions[0].questionText}</span>
          <br/>
          <span>Correct Answer: {questions[0].answers[3].answerText}</span>
          </>
        )
      }
      case "q2": {
        if (val) return <span style={{color: "green"}}>q2: {questions[1].questionText} correct</span>
        else return (
          <>
          <span style={{color: "#c70808"}}>q2: {questions[1].questionText}</span>
          <br/>
          <span>Correct Answer: {questions[1].answers[3].answerText}</span>
          </>
        )
      }
      case "q3": {
        if (val) return <span style={{color: "green"}}>q3: {questions[2].questionText} correct</span>
        else return (
          <>
          <span style={{color: "#c70808"}}>q3: {questions[2].questionText}</span>
          <br/>
          <span>Correct Answer: {questions[2].answers[0].answerText}</span>
          </>
        )
      }
      case "q4": {
        if (val) return <span style={{color: "green"}}>q4: {questions[3].questionText} correct</span>
        else return (
          <>
          <span style={{color: "#c70808"}}>q4: {questions[3].questionText}</span>
          <br/>
          <span>Correct Answer: {questions[3].answers[1].answerText}</span>
          </>
        )
      }
      case "q5": {
        if (val) return <span style={{color: "green"}}>q5: {questions[4].questionText} correct</span>
        else return (
          <>
          <span style={{color: "#c70808"}}>q5: {questions[4].questionText}</span>
          <br/>
          <span>Correct Answer: {questions[4].answers[1].answerText}</span>
          </>
        )
      }
      case "q6": {
        if (val) return <span style={{color: "green"}}>q6: {questions[5].questionText} correct</span>
        else return (
          <>
          <span style={{color: "#c70808"}}>q6: {questions[5].questionText}</span>
          <br/>
          <span>Correct Answer: {questions[5].answers[2].answerText}</span>
          </>
        )
      }
      case "q7": {
        if (val) return <span style={{color: "green"}}>q7: {questions[6].questionText} correct</span>
        else return (
          <>
          <span style={{color: "#c70808"}}>q7: {questions[6].questionText}</span>
          <br/>
          <span>Correct Answer: {questions[6].answers[0].answerText}</span>
          </>
        )
      }
      case "q8": {
        if (val) return <span style={{color: "green"}}>q8: {questions[7].questionText} correct</span>
        else return (
          <>
          <span style={{color: "#c70808"}}>q8: {questions[7].questionText}</span>
          <br/>
          <span>Correct Answer: {questions[7].answers[3].answerText}</span>
          </>
        )
      }
      case "q9": {
        if (val) return <span style={{color: "green"}}>q9: {questions[8].questionText} correct</span>
        else return (
          <>
          <span style={{color: "#c70808"}}>q9: {questions[8].questionText}</span>
          <br/>
          <span>Correct Answer: {questions[8].answers[0].answerText}</span>
          </>
        )
      }
      case "q10": {
        if (val) return <span style={{color: "green"}}>q10: {questions[9].questionText} correct</span>
        else return (
          <>
          <span style={{color: "#c70808"}}>q10: {questions[9].questionText}</span>
          <br/>
          <span>Correct Answer: {questions[9].answers[1].answerText}</span>
          </>
        )
      }
    }
  }

  return (
    <Card2>
      <h1 className="heading">You reached the end of the game!</h1>

      <h3 className="primary_text">Your final score is:</h3>

      <h3 className="final_score">{score}</h3>
      <br/><br/>
      <div style={{textAlign: "center"}}>{Object.entries(record).map(([key, value]) => (
        <div key={key}>
          {handleResult(key, value)}
        </div>
      ))}</div>

      <button className="play_again_btn" onClick={handleClick}>
        Play Again
      </button>
    </Card2>
  );
};
