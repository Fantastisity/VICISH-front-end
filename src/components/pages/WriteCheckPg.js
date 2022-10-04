import React from "react";
import WritingHandler from "../writingAssessment/WritingHandler";
import "./WriteCheck.css";
import GrammarPic from "../../images/grammarPic.png";
import { fadeInDown } from 'react-animations';
 import Radium, {StyleRoot} from 'radium';

 const styles = {
   fadeInDown: {
     animation: 'x 2s',
     animationName: Radium.keyframes(fadeInDown, 'fadeInDown'),
   },
  fadeInDown2: {
     animation: 'x 4s',
     animationName: Radium.keyframes(fadeInDown, 'fadeInDown'),
   }
 }

const WriteCheck = () => {
  return (
    <div style={{backgroundColor: "#F0BA98", height: "1800px"}}>
      <div className="headerBg">Grammar Checker</div>
<div style={{ display:"flex"}}>
<StyleRoot>
       <div style={styles.fadeInDown} className="grammarPic">
       <img src={GrammarPic} width='500' height='1000'></img>
       </div>
       </StyleRoot>
<StyleRoot>
       <div style={styles.fadeInDown2} className="grammarPic2">
       <img src={GrammarPic2} style={{marginLeft:"35%"}}></img>
       </div>
       </StyleRoot>
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
