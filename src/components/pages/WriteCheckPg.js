import React from "react";
import WritingHandler from "../writingAssessment/WritingHandler";
import "./WriteCheck.css";
import GrammarPic from "../../images/grammarPic.png";
import GrammarPic2 from "../../images/GrammarPic2.png";
import { fadeInDown } from "react-animations";
import Radium, { StyleRoot } from "radium";
import learnBg from "../../images/learnBg.png";
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

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

  const [expanded, setExpanded] = React.useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <div style={{ backgroundColor: "#F0BA98", height: "100%" }}>
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
        {/* <StyleRoot>
      <div style={styles.fadeInDown} className="grammarPic">
      <img src={GrammarPic} width='500' height='1000'></img>
      </div>
      </StyleRoot> */}
        <StyleRoot>
          <div style={styles.fadeInDown2} className="grammarPic2">
            <img src={GrammarPic2} style={{ marginLeft: "1%" }}></img>
          </div>
        </StyleRoot>
        <div style={{marginTop:"8%"}}>
        <div
          className="titleBg"
          style={{
            marginLeft: "33%",
            marginTop: "30px",
            borderRadius: "20px",
            padding: "20px",
            width: "71%",
            backgroundColor: "#FFF4E2",
          }}
        >
          Wondering where to improve your grammar? This grammar check feature
          helps you to identify any mistake made in a paragraph.<br></br>
          <br></br>Enter your paragraph in the text box below
        </div>
        <div className="inputDiv">{<WritingHandler />}</div>
        </div>
      </div>
      <div style={{width:"30%",marginLeft:"5%", paddingBottom:"5%", backgroundColor:"#F0BA98"}}>
      <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')} style={{ backgroundColor:"#FFF4E2"}}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1bh-content"
          id="panel1bh-header"
        >
          <Typography sx={{ width: '33%', flexShrink: 0 }}>
            Learning Tips
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
        <img src={GrammarPic} width='500' height='1000' style={{marginLeft:"4%"}}></img>
        </AccordionDetails>
      </Accordion>
      </div>
    </div>
  );
};

export default WriteCheck;
{/* <img src={GrammarPic} width='500' height='1000'></img> */}
