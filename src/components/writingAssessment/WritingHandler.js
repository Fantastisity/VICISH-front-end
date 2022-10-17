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
      <div>
        {dt.grammar.errors.length ? <div style={{backgroundColor:"#FFFFFF", borderRadius:"20px"}}>
        <h1 style={{ color: 'black', marginLeft:"8%"}}>Solution</h1>
        <ol type="I">
        {dt.grammar.errors.map((res, idx) => (
            <li style={{ listStyleType: 'decimal',marginTop:"1%",marginLeft:"10%" }}>
              <span style={{fontWeight: "700"}}>Error</span>: <span style={{color:"red"}}>{res.bad}</span> 
              <br/>
              <span style={{fontWeight: "700"}}>Offset</span>: <span>{res.offset}</span> 
              <br/>
              <span style={{fontWeight: "700"}}>Type</span>: <span>{res.type}</span>   
              <br/>
              <span style={{fontWeight: "600"}}>Description</span>: {res.description.en}
              {res.better.length ? <br/><span style={{fontWeight: "600"}}> Suggestion:
                 <ol type="i" style={{marginLeft: "10%"}}>
                  {
                    res.better.map(sug => (
                      <li style={{color: "green"}}>
                        {sug}
                      </li>
                    ))
                  }
                </ol>
                </span> : 
<></>
}    
            </li>
        ))}
        </ol>
        </div> : <></>}
        <div style={{backgroundColor:"#FFFFFF", borderRadius:"20px", marginTop:"5%"}}>
        <h1 style={{ color: '#FAB098', marginLeft:"8%"}}>Text analysis</h1>
          <ol style={{ listStyleType: 'circle', marginLeft:"10%"}}>
        <li><span style={{fontWeight: "600",marginTop:"1%",marginLeft:"1%"}}>ReadingEase</span>: {dt.stats.fleschKincaid.readingEase}</li>
        <li><span style={{fontWeight: "600",marginTop:"1%",marginLeft:"1%"}}>Interpretation</span>: {dt.stats.fleschKincaid.interpretation}</li>
        </ol>
        </div>
      </div>
    );
  }

  return (
    <div className="layout">
      <textarea
        className="Writetextarea"
        rows="18"
        cols="67"
        placeholder="type something..."
        style={{backgroundColor: "#FFF4E2", color:"#000"}}
        type="text"
        value={enteredText}
        onChange={handleInputContent}
      />

      <br></br>
      <br></br>

      <button className = "writingHandlerBt" type="submit" onClick={submitHandler} style={{marginLeft:"30%", width:"50%"}}>
        <span> Check My Grammar
        </span>
      </button>
      <br></br>
      <div style={{marginTop:"8%"}}></div>
      <span>{dt && printdt()}</span>
    </div>
  );
};

export default WritingHandler;
