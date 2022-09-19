import React from "react";
import InputHandler from "../wordCloud/InputHandler";
import WritingHandler from "../writingAssessment/WritingHandler";
import "./VocabPg.css";
import "../general/NewCard.css";

const VocabPg = () => {
  return (
    <div style={{backgroundColor: "#F0BA98", height: "1000px"}}>
    <div className="headerBg">Keyword WordCloud</div>
    <div>
      <div>
        <InputHandler />
      </div>
    </div>
    </div>
  );
};

export default VocabPg;
