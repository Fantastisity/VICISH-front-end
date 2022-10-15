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

  const dispRes = (no, qs, ans, right) => {
    let col = right ? "green" : "#c70808";
    return (
      <>
        <th>{no}</th>
        <th>{questions[qs].questionText}</th>
        <th style={{color: col}}>{questions[qs].answers[ans].answerText}</th>
        </>
    )
  }

  const handleResult = (key, val) => {
    switch (key) {
      case "q1": {
        if (val) return dispRes(1, 0, 0, 1)
        else return dispRes(1, 0, 0, 0)
      }
      case "q2": {
        if (val) return dispRes(2,1, 2, 1)
        else return dispRes(2,1, 2, 0)
      }
      case "q3": {
        if (val) return dispRes(3,2, 0, 1)
        else return dispRes(3,2, 0, 0)
      }
      case "q4": {
        if (val) return dispRes(4,3, 1, 1)
        else return dispRes(4,3, 1, 0)
      }
      case "q5": {
        if (val) return dispRes(5,4, 1, 1)
        else return dispRes(5,4, 1, 0)
      }
      case "q6": {
        if (val) return dispRes(6,5, 2, 1)
        else return dispRes(6,5, 2, 0)
      }
      case "q7": {
        if (val) return dispRes(7,6, 3, 1)
        else return dispRes(7,6, 3, 0)
      }
      case "q8": {
        if (val) return dispRes(8,7, 2, 1)
        else return dispRes(8,7, 2, 0)
      }
      case "q9": {
        if (val) return dispRes(9,8, 2, 1)
        else return dispRes(9,8, 2, 0)
      }
      case "q10": {
        if (val) return dispRes(10,9, 3, 1)
        else return dispRes(10,9, 3, 0)
      }
    }
  }

  return (
    <Card1>
      <h1 className="heading">You reached the end of the game!</h1>

      <h3 className="primary_text">Your final score is:</h3>

      <h3 className="final_score">{score}</h3>
      <br/><br/>
      <table class="styled-table">
        <thead>
            <tr>
                <th>#</th>
                <th>Question</th>
                <th>Answer</th>
            </tr>
        </thead>
        <tbody>
          {Object.entries(record).map(([key, value]) => (
          <tr key={key}>
            {handleResult(key, value)}
          </tr>
        ))}
        </tbody>
    </table>

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

  const dispRes = (no, qs, ans, right) => {
    let col = right ? "green" : "#c70808";
    return (
      <>
        <th>{no}</th>
        <th>{questions[qs].questionText}</th>
        <th style={{color: col}}>{questions[qs].answers[ans].answerText}</th>
        </>
    )
  }

  const handleResult = (key, val) => {
    switch (key) {
      case "q1": {
        if (val) return dispRes(1, 0, 3, 1)
        else return dispRes(1, 0, 3, 0)
      }
      case "q2": {
        if (val) return dispRes(2,1, 3, 1)
        else return dispRes(2,1, 3, 0)
      }
      case "q3": {
        if (val) return dispRes(3,2, 0, 1)
        else return dispRes(3,2, 0, 0)
      }
      case "q4": {
        if (val) return dispRes(4,3, 1, 1)
        else return dispRes(4,3, 1, 0)
      }
      case "q5": {
        if (val) return dispRes(5,4, 1, 1)
        else return dispRes(5,4, 1, 0)
      }
      case "q6": {
        if (val) return dispRes(6,5, 2, 1)
        else return dispRes(6,5, 2, 0)
      }
      case "q7": {
        if (val) return dispRes(7,6, 0, 1)
        else return dispRes(7,6, 0, 0)
      }
      case "q8": {
        if (val) return dispRes(8,7, 3, 1)
        else return dispRes(8,7, 3, 0)
      }
      case "q9": {
        if (val) return dispRes(9,8, 0, 1)
        else return dispRes(9,8, 0, 0)
      }
      case "q10": {
        if (val) return dispRes(10,9, 1, 1)
        else return dispRes(10,9, 1, 0)
      }
    }
  }

  return (
    <Card2>
      <h1 className="heading">You reached the end of the game!</h1>

      <h3 className="primary_text">Your final score is:</h3>

      <h3 className="final_score">{score}</h3>
      <br/><br/>
      <table class="styled-table">
        <thead>
            <tr>
                <th>#</th>
                <th>Question</th>
                <th>Answer</th>
            </tr>
        </thead>
        <tbody>
          {Object.entries(record).map(([key, value]) => (
          <tr key={key}>
            {handleResult(key, value)}
          </tr>
        ))}
        </tbody>
    </table>

      <button className="play_again_btn" onClick={handleClick}>
        Play Again
      </button>
    </Card2>
  );
};
