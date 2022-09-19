import React, { useState, useEffect } from "react";
import {FinalGrammarPage} from "../quizzes/FinalPage";
import {EnglishQuestionPage} from "../quizzes/QuestionPage";
import {GrammarStartingPage} from "../quizzes/StartingPage";
import "./quiz.css";
import {englishqz} from "../quizzes/questions";
import { Card2 } from "../quizzes/Card";
import Axios from "axios";

const EnglishQuiz = () => {
    const [answers, setAnswers] = useState([]);
    const [score, setScore] = useState(0);
    const [topScore, setTopScore] = useState(0);
    const [showStartingPage, setShowStartingPage] = useState(true);
    const [showQuestionsPage, setShowQuestionsPage] = useState(false);
    const [showFinalPage, setShowFinalPage] = useState(false);
    const [answerRecord, setAnswerRecord] = useState({q1:0, q2:0, q3:0, q4:0, q5:0, q6:0, q7:0, q8:0, q9:0, q10:0});

    useEffect(() =>{
      Axios.get("https://vicish.herokuapp.com/englishquiz").then((response) => {
        setAnswers(response.data);
      })
    },[])
  
    const handleRecord = (ind) => {
      var q = "q" + ind;
      console.log(ind);
      setAnswerRecord({...answerRecord, [q] : 1});
    }
    return (
      <div style={{backgroundColor: "#F0BA98", height: "1500px"}}>
        <div className="headerBg">Grammar Ability Test</div>
        <div className="slangIntro" style={{
          marginLeft: "280px", 
          marginTop: "30px", 
          borderRadius: "60px",
          padding: "25px",
          width: "60%",
          fontSize: "30px",
          textAlign: "center"
          }}>
            Struggling where to start improving your English? Test your grammar ability first! See whether you are a starter or an advanced learner.
          </div>
      <div className="slangTotal">
        <div className="slangPage">
          <div className="quizPos" style={{marginLeft: "225px"}}>
            {showStartingPage && (
              <GrammarStartingPage
                setShowStartingPage={setShowStartingPage}
                setShowQuestionsPage={setShowQuestionsPage}
                topScore={topScore}
              />
            )}
  
            {showQuestionsPage && (
              answers.length ? 
              <EnglishQuestionPage
                score={score}
                setScore={setScore}
                setShowQuestionsPage={setShowQuestionsPage}
                setShowFinalPage={setShowFinalPage}
                handleRecord = {handleRecord}
                questions={englishqz}
                answers = {answers}
              /> : (
                <Card2>
                  <h3>Loading...</h3>
                </Card2>
              )
            )}
  
            {showFinalPage && (
              <FinalGrammarPage
                score={score}
                topScore={topScore}
                setTopScore={setTopScore}
                setShowStartingPage={setShowStartingPage}
                setShowFinalPage={setShowFinalPage}
                setScore={setScore}
                record = {answerRecord}
                questions={englishqz}
                setAnswerRecord={setAnswerRecord}
              />
            )}
          </div>
        </div>
      </div>
      </div>
    );
  };
  
  export default EnglishQuiz;