import React, { useState } from "react";
import useTrait from "../utility/useTrait";
import "./WritingHandler.css";
import textgears from 'textgears-api';

const textgearsApi = textgears('gDFMS8ww9P2r2Ej0', {language: 'en-US', ai: false});

const WritingHandler = () => {
  const [enteredText, setEnteredText] = useState("");
  const str = useTrait("");
  const [dt, setDt] = useState(null);
  const handleInputContent = (event) => {
    setEnteredText(event.target.value);
  };

  const getSuggestions = (inputValue) => {
    textgearsApi.analyzeText(inputValue)
    .then((data) => {
        setDt(data.response)
    })
    .catch((err) => {});
  };

  const submitHandler = (event) => {
    event.preventDefault();
    str.set(enteredText);
    getSuggestions(str.get())
  };
  

  const printdt = () => {
    return (
      <ol>
        {dt.grammar.errors.map((res, idx) => (
            <li><span style={{fontWeight: "600"}}>Error</span>: {res.bad}   <span style={{fontWeight: "600"}}>Suggestion</span>: {res.description.en}</li>
        ))}
        <li><span style={{fontWeight: "600"}}>Emotion</span>: positive: {dt.stats.emotion.positive} negative: {dt.stats.emotion.negative}</li>
        <li><span style={{fontWeight: "600"}}>Grade</span>: {dt.stats.fleschKincaid.grade}</li>
        <li><span style={{fontWeight: "600"}}>Interpretation</span>: {dt.stats.fleschKincaid.interpretation}</li>
      </ol>
    );
  }

  return (
    <div className="layout">
      <textarea
        className="Writetextarea"
        rows="18"
        cols="110"
        placeholder="type something..."
        style={{backgroundColor: "#FFF4E2", color:"#000"}}
        type="text"
        value={enteredText}
        onChange={handleInputContent}
      />

      <br></br>
      <br></br>

      <button className = "writingHandlerBt" type="submit" onClick={submitHandler}>
        <span> Check My Grammar
        </span>
      </button>
      <br></br>
      <span>{printdt()}</span>
    </div>
  );
};

export default WritingHandler;
