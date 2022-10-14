import React, { useState, useEffect } from "react";
import {FinalGrammarPage} from "../quizzes/FinalPage";
import {EnglishQuestionPage} from "../quizzes/QuestionPage";
import {GrammarStartingPage} from "../quizzes/StartingPage";
import "./quiz.css";
import {englishqz} from "../quizzes/questions";
import { Card2 } from "../quizzes/Card";
import GrammarPic from "../../images/grammarPic.png";
import Axios from "axios";
import learnBg from "../../images/learnBg.png";
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

const EnglishQuiz = () => {
    const [answers, setAnswers] = useState([]);
    const [score, setScore] = useState(0);
    const [topScore, setTopScore] = useState(0);
    const [showStartingPage, setShowStartingPage] = useState(true);
    const [showQuestionsPage, setShowQuestionsPage] = useState(false);
    const [showFinalPage, setShowFinalPage] = useState(false);
    const [answerRecord, setAnswerRecord] = useState({q1:0, q2:0, q3:0, q4:0, q5:0, q6:0, q7:0, q8:0, q9:0, q10:0});
    const [expanded, setExpanded] = useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

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
        <div className="headerBg" style={{backgroundImage:`url(${learnBg}`, backgroundSize:"cover", color:"#EC7F6A"}}>Grammar Ability Test</div>
        <div className="slangIntro" style={{
          marginLeft: "20%", 
           marginTop: "5%", 
          borderRadius: "60px",
          padding: "25px",
          width: "60%",
          fontSize: "30px",
          textAlign: "center"
          }}>
            Struggling where to start improving your English? Test your grammar ability first! See whether you are a starter or an advanced learner.
          </div>
          <div
        style={{
          width: "40%",
          marginLeft: "32%",
          paddingBottom: "5%",
          backgroundColor: "#F0BA98", 
          position: "relative"
        }}
      >
        <Accordion
          expanded={expanded === "panel1"}
          onChange={handleChange("panel1")}
          style={{ backgroundColor: "#FFF4E2" }}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1bh-content"
            id="panel1bh-header"
          >
            <p style={{fontWeight: "600"}}>Learning Tips</p>
          </AccordionSummary>
          <AccordionDetails>
            <img
              src={GrammarPic}
              width="500"
              height="1000"
              style={{ marginLeft: "4%" }}
            ></img>
          </AccordionDetails>
        </Accordion>
      </div>
      <div className="slangTotal">
        <div className="slangPage">
          <div>
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
