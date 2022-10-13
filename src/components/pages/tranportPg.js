import React, { useState } from "react";
import "./transportationPg.css";
import Accordion from "./Accordion";
import transBg from '../../images/transBg.png';
import transportBg from "../../images/transportBg.png";

const colourStyles = {
  control: (styles) => ({ ...styles, backgroundColor: "white" }),
  option: (styles, { isDisabled }) => {
    return {
      ...styles,
      backgroundColor: isDisabled ? "red" : "green",
      color: "#FFF",
      cursor: isDisabled ? "not-allowed" : "default"
    };
  }
};

const Transport = () => {
  var map = {};
  map["full fare"] = 1;
  map["concession"] = 2;
  map["weekday"] = 4;
  map["weekend"] = 5;
  map["public holiday"] = 5;
  map["daily fare"] = 6;
  map["2 hour fare"] = 7;
  map["zone1"] = 8;
  map["zone2"] = 9;
  map["zone12"] = 10;

  map[(1 << 1) | (1 << 4) | (1 << 6) | (1 << 8)] = 9.2;
  map[(1 << 1) | (1 << 4) | (1 << 6) | (1 << 9)] = 6.2;
  map[(1 << 1) | (1 << 4) | (1 << 6) | (1 << 10)] = 9.2;
  map[(1 << 1) | (1 << 4) | (1 << 7) | (1 << 8)] = 4.6;
  map[(1 << 1) | (1 << 4) | (1 << 7) | (1 << 9)] = 3.1;
  map[(1 << 1) | (1 << 4) | (1 << 7) | (1 << 10)] = 4.6;
  map[(1 << 1) | (1 << 5) | (1 << 6) | (1 << 8)] = 6.7;
  map[(1 << 1) | (1 << 5) | (1 << 6) | (1 << 9)] = 6.2;
  map[(1 << 1) | (1 << 5) | (1 << 6) | (1 << 10)] = 6.7;
  map[(1 << 1) | (1 << 5) | (1 << 7) | (1 << 8)] = 4.6;
  map[(1 << 1) | (1 << 5) | (1 << 7) | (1 << 9)] = 3.1;
  map[(1 << 1) | (1 << 5) | (1 << 7) | (1 << 10)] = 4.6;

  map[(1 << 2) | (1 << 4) | (1 << 6) | (1 << 8)] = 4.6;
  map[(1 << 2) | (1 << 4) | (1 << 6) | (1 << 9)] = 3.1;
  map[(1 << 2) | (1 << 4) | (1 << 6) | (1 << 10)] = 4.6;
  map[(1 << 2) | (1 << 4) | (1 << 7) | (1 << 8)] = 2.3;
  map[(1 << 2) | (1 << 4) | (1 << 7) | (1 << 9)] = 1.55;
  map[(1 << 2) | (1 << 4) | (1 << 7) | (1 << 10)] = 2.3;
  map[(1 << 2) | (1 << 5) | (1 << 6) | (1 << 8)] = 3.35;
  map[(1 << 2) | (1 << 5) | (1 << 6) | (1 << 9)] = 3.1;
  map[(1 << 2) | (1 << 5) | (1 << 6) | (1 << 10)] = 3.35;
  map[(1 << 2) | (1 << 5) | (1 << 7) | (1 << 8)] = 2.3;
  map[(1 << 2) | (1 << 5) | (1 << 7) | (1 << 9)] = 1.55;
  map[(1 << 2) | (1 << 5) | (1 << 7) | (1 << 10)] = 2.3;


  const [option1, setOption1] = useState("full fare");
  const [option2, setOption2] = useState("weekday");
  const [option3, setOption3] = useState("daily fare");
  const [option4, setOption4] = useState("zone1");
  const [result, setResult] = useState(9.20);

  const handleChangeOption1 = (event) => {
    setOption1(event.target.value);
  };

  const handleChangeOption2 = (event) => {
    setOption2(event.target.value);
  };
  const handleChangeOption3 = (event) => {
    setOption3(event.target.value);
  };
  const handleChangeOption4 = (event) => {
    setOption4(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setResult(map[(1 << map[option1]) | (1 << map[option2]) | (1 << map[option3]) | (1 << map[option4])]);
  };

  const options1 = [
    {
      label: "Full fare",
      value: "full fare",
    },
    {
      label: "Concession",
      value: "concession",
    },
  ];

  const options2 = [
    {
      label: "Weekday",
      value: "weekday",
    },
    {
      label: "Weekend",
      value: "weekend",
    },
    {
      label: "Public Holiday",
      value: "public holiday",
    },
  ];

  const options3 = [
    {
      label: "Daily fare",
      value: "daily fare",
    },
    {
      label: "2 hour fare",
      value: "2 hour fare",
    },
  ];

  const options4 = [
    {
      label: "Zone1",
      value: "zone1",
    },
    {
      label: "Zone2",
      value: "zone2",
    },
    {
      label: "Zone 1 & 2",
      value: "zone12",
    },
  ];

  return (
    <div style={{ backgroundColor: "#F0BA98", height: "auto" }}>
<div className="headerBg" style={{backgroundImage:`url(${transportBg}`, backgroundSize:"cover"}}>Public Transport in Victoria</div>
      <p style={{textAlign: "center", marginTop: "15px",fontSize: "36px", fontWeight: "600", color: "#ed674c"}}>What is Myki Card?</p>
      <div style={{
          marginLeft: "290px", 
          marginTop: "10px", 
          borderRadius: "60px",
          padding: "25px",
          width: "60%",
          fontSize: "20px",
          textAlign: "center"}}>
            Myki, stylised as myki, is a reloadable credit card-sized contactless smart card ticketing 
            system used for electronic payment of fares on most public transport services in Melbourne and regional Victoria, Australia.
      </div>
      <img src={transBg} alt="" style={{width: "47%", height: "524px"}}/>
      <div className="container" style={{width: "41%", marginLeft: "50%", marginTop: "-33rem"}}>
        <Accordion />
      </div>
      <p style={{fontSize: "26px", fontWeight: "600", color: "#ed674c", marginTop: "22%", marginLeft: "42%"}}>Myki Fare Calculator</p>
      <div className="main-myki">
        <form onSubmit={handleSubmit} style={{position: "absolute", marginTop: "-24%"}}>
          <div className="trans-box">
            <h2>1. Select a fare type</h2>
            <select value={option1} onChange={handleChangeOption1} style={{width: "140%", marginTop: "3%", marginLeft: "-17%", border: "1px solid black"}}>
              {options1.map((option) => (
                <option value={option.value}>{option.label}</option>
              ))}
            </select>
          </div>
          <br></br>
          <div className="trans-box">
            <h2>2. Select a day</h2>
            {/* <Select value = {option2} options = {options2} onChange={handleChangeOption2} autoFocus={true} defaultValue={option2}></Select> */}
            <select value={option2} onChange={handleChangeOption2} style={{width: "140%", marginTop: "3%", marginLeft: "-17%", border: "1px solid black"}}>
              {options2.map((option) => (
                <option value={option.value}>{option.label}</option>
              ))}
            </select>
          </div>
          <br></br>
          <div className="trans-box">
            <h2>3. Select a product</h2>
            {/* <Select value = {option3} options = {options3} onChange={handleChangeOption3} autoFocus={true} defaultValue={option3}></Select> */}
            <select  value={option3} onChange={handleChangeOption3} style={{width: "140%", marginTop: "3%", marginLeft: "-17%", border: "1px solid black"}}>
              {options3.map((option) => (
                <option value={option.value}>{option.label}</option>
              ))}
            </select>
          </div>
          <br></br>
          <div className="trans-box">
            <h2>4. Select a Zone</h2>
            <select value={option4} onChange={handleChangeOption4} style={{width: "140%", marginTop: "3%", marginLeft: "-17%", border: "1px solid black"}}>
              {options4.map((option) => (
                <option value={option.value}>{option.label}</option>
              ))}
            </select>
          </div>
          <button type="submit" className="button1" style={{marginLeft: "-98%"}}>Calculate fare</button>
        </form>
        <br></br>
        <div className="result-div">
          <h2>Myki money: </h2>
          <span className="result-p">${result}</span>
        </div>
      </div>
    </div>
  );
};

export default Transport;
