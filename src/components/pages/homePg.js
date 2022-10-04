import React from "react";
import "../../App.css";
import InfoSection from "./infoSection/infos";
import { lifeObj, learnObj, socialObj } from "./infoSection/data";
import homebg from "../../images/homeBg.jpg";
import homeIcon1 from "../../images/homeIcon1.png";
import homeIcon2 from "../../images/homeIcon2.png";
import homeIcon3 from "../../images/homeIcon3.png";
import "animate.css/animate.min.css";
 import { AnimationOnScroll } from 'react-animation-on-scroll';

export default function Home() {
  return (
    <>
      <div>
        <div>
          <img className="homebg" src={homebg} alt="home" />
        </div>
        <div className="homepageDivider">
          <div className="titlePos">
          <h1>
            <span id="home-content1">Start A New Journey</span>
          </h1>
          <h1>
            <span id="home-content2">Study in Victoria</span>
          </h1>
          </div>
        </div>
        <div className="homepageDivider2"></div>
        <div className="homepageDivider3"></div>
      </div>
      <div className="home">
        <div className="IconDivider">
          <div className="SingleIcon">
            <p className="IconP" style={{marginLeft: "50px"}}>Number of Chinese students abroad</p>
            <img src={homeIcon1} style={{marginLeft: "65px"}}/>
            <p className="IconP1" style={{marginLeft: "125px"}}>1.27 million</p>
          </div>
          <div className="SingleIcon">
            <p className="IconP">International Student Tertiary enrolments</p>
            <img src={homeIcon2} style={{marginLeft: "37px"}}/>
            <p className="IconP1" style={{marginLeft: "122px"}}>21%</p>
          </div>
          <div className="SingleIcon">
            <p className="IconP" style={{marginLeft: "-3px"}}>Expect to increase</p>
            <img src={homeIcon3} style={{marginLeft: "-29px"}}/>
            <p className="IconP1" style={{marginLeft: "69px"}}>17.65%</p>
          </div>
        </div>
        <div className="aboutSection">
          <h1 className="aboutH" style={{marginLeft: "55px"}}>About</h1>
          <br></br>
          <p className="aboutP" style={{marginLeft: "55px"}}>
            This website is here to help young international students who are
            just landing in this foreign country
          </p>
          <br></br>
          <p className="aboutP" style={{marginLeft: "55px"}}>
            Curious to learn more? Get an understading of "Life in AU",
            "Learning English" and "Explore Local Culture"
          </p>
        </div>
      </div>
      <AnimationOnScroll animateOnce={true} duration={1.5} animateIn="animate__fadeInDown">
       <InfoSection {...lifeObj}/>
       </AnimationOnScroll>
       <AnimationOnScroll animateOnce={true} duration={1.8} animateIn="animate__fadeInDown">
       <InfoSection {...learnObj} />
       </AnimationOnScroll>
       <AnimationOnScroll animateOnce={true} duration={2.1} animateIn="animate__fadeInDown">
       <InfoSection {...socialObj} />
       </AnimationOnScroll>
    </>
  );
}
