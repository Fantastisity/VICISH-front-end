import React from "react";
import WritingHandler from "../writingAssessment/WritingHandler";
import "./WriteCheck.css";
import GrammarPic from "../../images/grammarPic.png";

const WriteCheck = () => {
  return (
    <div style={{backgroundColor: "#F0BA98", height: "1800px"}}>
      <div className="headerBg">Grammar Checker</div>
<div style={{
         marginTop: "50px",
         marginLeft: "100px"
       }}>
       <img src={GrammarPic} width='500' height='1000'></img>
       </div>
      <div className="slangIntro" style={{
          marginLeft: "320px", 
          marginTop: "30px", 
          borderRadius: "60px",
          padding: "25px",
          width: "56%",
          fontSize: "30px",
          textAlign: "center"}}>
           Wondering where to improve your grammar? This grammar check feature helps you to identify any mistake made in a paragraph. 
          </div>
          <div className="titleBg" style={{
          marginLeft: "550px", 
          marginTop: "30px", 
          borderRadius: "20px",
          padding: "20px",
          width: "25%",
          backgroundColor: "#FFF4E2"}}>Enter your paragraph in the text box below</div>
      <div className="inputDiv">{<WritingHandler />}</div>
      <div></div>
    </div>
  );
};

export default WriteCheck;
