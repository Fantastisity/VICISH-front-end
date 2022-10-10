import React, { useEffect, useState } from "react";
import {FinalSlangPage} from "../quizzes/FinalPage";
import {SlangQuestionPage} from "../quizzes/QuestionPage";
import {SlangStartingPage} from "../quizzes/StartingPage";
import "./quiz.css";
import {slangqs} from "../quizzes/questions";
import "../general/SlangCard.css";
import Axios from "axios";
import { Button } from "@mui/material";
import learnBg from "../../images/learnBg.png";

const colors = [
  "#FFF4E2", "#EC7F6A", "#D5E5DB", "#FFE0DB", "#FFF4E2", "#FFE0DB", "#FFF4E2", "#FFE4D8", "#EC7F6A", "#D5E5DB"
]

const SlangQuiz = () => {
  const [quizzes, setQuizzes] = useState([]);
  const [index, setIndex] = useState([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
  const [score, setScore] = useState(0);
  const [topScore, setTopScore] = useState(0);
  const [showStartingPage, setShowStartingPage] = useState(true);
  const [showQuestionsPage, setShowQuestionsPage] = useState(false);
  const [showFinalPage, setShowFinalPage] = useState(false);
  const [answerRecord, setAnswerRecord] = useState({q1:0, q2:0, q3:0, q4:0, q5:0, q6:0, q7:0, q8:0, q9:0, q10:0});
  const handleRecord = (ind) => {
    var q = "q" + ind;
    setAnswerRecord({...answerRecord, [q] : 1});
  }

  const changeIndex = () => {
    var arr = [];
    while (arr.length < 10) {
        var r = Math.floor(Math.random() * 100);
        if (arr.indexOf(r) === -1) arr.push(r);
    }
    setIndex(arr);
  }

  useEffect(() =>{
    Axios.get("https://vicish.herokuapp.com/slangquiz").then((response) => {
      setQuizzes(response.data);
    })
  },[]);

  return (
    <div style={{backgroundColor: "#F0BA98", height: "100%"}}>
<div className="headerBg" style={{backgroundImage:`url(${learnBg}`, backgroundSize:"cover", color:"#EC7F6A"}}>Australia Slang Game</div>
      <div className="slangIntro" style={{
          marginLeft: "25%", 
           marginRight:"25%",
          marginTop: "30px", 
          borderRadius: "60px",
          padding: "25px",
          width: "50%",
          fontSize: "30px",
          textAlign: "center"}}>
            Learn the ten popular slang using flip cards, and then welcome to play our Australian Slang Game!
      </div>
      <div className="learnSlang">
          {quizzes.length && index.map((i, key) => {
            return (
              <div key={key} className="slangcard">
                <div style={{backgroundColor: colors[key], borderRadius: "20px", border: "1px solid `${colors[key]}`"}} className="content">
                  <div className="front">
                    <p>{quizzes[i].Slang}</p>
                    <br></br>
                  </div>

                  <div style={{backgroundColor: colors[key], borderRadius: "20px", border: "1px solid `${colors[key]}`"}} className="back">
                    <p className="description">
                      {quizzes[i].Meaning}
                    </p>
                  </div>
                </div>
              </div>
            )
          })}
          <Button variant="contained" onClick={() => changeIndex()} style = {{marginLeft: "44%", backgroundColor: "#e8b17d", color: "black"}}>
            Show New Phrases
          </Button>
        </div>
    <div className="slangTotal" style={{width: "700px", marginLeft: "28%"}}>
      <div className="slangPage">
        <div className="quizPos">
          {showStartingPage && (
            <SlangStartingPage
              setShowStartingPage={setShowStartingPage}
              setShowQuestionsPage={setShowQuestionsPage}
              topScore={topScore}
            />
          )}

          {showQuestionsPage && (
            <SlangQuestionPage
              score={score}
              setScore={setScore}
              setShowQuestionsPage={setShowQuestionsPage}
              setShowFinalPage={setShowFinalPage}
              handleRecord = {handleRecord}
              questions={slangqs}
            />
          )}

          {showFinalPage && (
            <FinalSlangPage
              score={score}
              topScore={topScore}
              setTopScore={setTopScore}
              setShowStartingPage={setShowStartingPage}
              setShowFinalPage={setShowFinalPage}
              setScore={setScore}
              setAnswerRecord = {setAnswerRecord}
              record = {answerRecord}
              questions={slangqs}
            />
          )}
        </div>
      </div>
    </div>
    </div>
  );
};

export default SlangQuiz;
