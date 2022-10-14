import React from "react";
import WritingHandler from "../writingAssessment/WritingHandler";
import "./WriteCheck.css";
import GrammarPic2 from "../../images/GrammarPic2.png";
import { fadeInDown } from "react-animations";
import Radium, { StyleRoot } from "radium";
import learnBg from "../../images/learnBg.png";
import Typography from "@mui/material/Typography";


const styles = {
  fadeInDown: {
    animation: "x 2s",
    animationName: Radium.keyframes(fadeInDown, "fadeInDown"),
  },
  fadeInDown2: {
    animation: "x 4s",
    animationName: Radium.keyframes(fadeInDown, "fadeInDown"),
  },
};

const WriteCheck = () => {
  return (
    <div style={{ backgroundColor: "#F0BA98", height: "auto" }}>
      <div
        className="headerBg"
        style={{
          backgroundImage: `url(${learnBg}`,
          backgroundSize: "cover",
          color: "#EC7F6A",
        }}
      >
        Grammar Checker
      </div>
      <div style={{ display: "flex" }}>
        <StyleRoot>
          <div style={styles.fadeInDown2} className="grammarPic2">
            <img src={GrammarPic2} style={{ marginLeft: "1%" }}></img>
          </div>
        </StyleRoot>
        <div style={{ marginTop: "8%" }}>
          <div
            className="titleBg"
            style={{
              marginLeft: "25%",
              marginTop: "7%",
              borderRadius: "20px",
              padding: "20px",
              width: "60%",
              backgroundColor: "#FFF4E2",
            }}
          >
            Wondering where to improve your grammar? This grammar check feature
            helps you to identify any mistake made in a paragraph.<br></br>
            <br></br>Enter your paragraph in the text box below<br></br><br></br>
            <p style={{color:"#F87B73"}}>Important! When determining text metrics, accuracy is directly
            related to the size of the text. Determining the readability or
            other parameters of the text for a two-word sentence is meaningless.
            It is recommended to check texts that has at least 30 words. The
            more the better.</p>
            
          </div>
          <div className="inputDiv">{<WritingHandler />}</div>
        </div>
      </div>
      
    </div>
  );
};

export default WriteCheck;
