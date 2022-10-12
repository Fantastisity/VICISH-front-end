import React, { useState } from "react";
import ReactWordcloud from "react-wordcloud";
import useTrait from "../utility/useTrait";
import "./WordCloud.css";

function wordFreq(string) {
  if (string === null) return;
  var words = string.replace(/[.]/g, "").split(/\s/);
  var freqMap = {};
  words.forEach(function (w) {
    if (!freqMap[w]) {
      freqMap[w] = 0;
    }
    freqMap[w] += 1;
  });
  const result = Object.entries(freqMap).map(([text, value]) => ({
    text,
    value,
  }));
  console.log(result);
  return result;
}

const InputHandler = () => {
  const [enteredText, setEnteredText] = useState("");
  const str = useTrait("");
  const [dt, setDt] = useState([]);

  const textChangeHandler = (i) => {
    setEnteredText(i.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault();
    str.set(enteredText);
    setEnteredText("");
    setDt(wordFreq(str.get()));
  };

  const options = {
    colors: ["#1f77b4", "#ff7f0e", "#2ca02c", "#d62728", "#9467bd", "#8c564b"],
    enableTooltip: true,
    deterministic: true,
    fontFamily: "impact",
    fontSizes: [15, 70],
    fontStyle: "normal",
    fontWeight: "normal",
    padding: 1,
    rotations: 3,
    rotationAngles: [0, 90],
    scale: "sqrt",
    spiral: "archimedean",
    transitionDuration: 1000,
  };
  const size = [600, 400];

  return (
    <div>
      <div className="slangIntro" style={{
          marginLeft: "280px", 
          marginTop: "30px", 
          borderRadius: "60px",
          padding: "25px",
          width: "60%",
          fontSize: "30px",
          textAlign: "center"}}>
            Have you ever lost focus while reading a dry, long article? This WorldCloud feature is here to assist capturing the high-frequency words. Reading has never been that easy with keywords in your mind. 
          </div>
      <div className="word-cloud">
        {/* <h4>WordCloud</h4> */}
        <div>
          <div className="titleBg" style={{
          marginLeft: "20px", 
          marginTop: "30px", 
          borderRadius: "20px",
          padding: "20px",
          width: "100%",
          backgroundColor: "#FFF4E2"}}>Enter or paste paragraphs of your readings in the text box below</div>
          <textarea
            className="Vocatextarea"
            rows="8"
            cols="60"
            placeholder="type something..."
            style={{backgroundColor: "#FFF4E2", color:"#000"}}
            type="text"
            value={enteredText}
            onChange={textChangeHandler}
          />
          <button className = "wordcloudBt" type="submit" onClick={submitHandler}>
            <span style={{marginLeft: "2px"}}>Generate</span>
          </button>
        </div>
        <div>
          <ReactWordcloud options={options} size={size} words={dt} />
        </div>
      </div>
    </div>
  );
};

export default InputHandler;
