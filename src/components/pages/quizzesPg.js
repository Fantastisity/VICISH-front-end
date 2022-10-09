import React from "react";
import  "../general/NewCard.css";
import { CardWrapper, CardLayout, CardH2, CardP, CardIcon } from './infoSection/element';
import { Link } from "react-router-dom";
import slangcard from '../../images/slangcard.jpg';
import grammarcard from '../../images/grammarcard.jpg';

export default function Quizzes() {
    return (
        <>
        <div className="headerBg">English Quzzies</div>
        <CardWrapper style={{ marginLeft: "361px", marginTop: "60px"}}>
        <Link to='/slang' style={{ textDecoration: 'none' }}>
          <CardLayout style={{width: "300px", height: "250px"}}>
            <CardIcon src={slangcard} />
            <CardH2>Australian Slang Quiz</CardH2>
          </CardLayout>
          </Link>
          <Link to='/english-quiz' style={{ textDecoration: 'none' }}>
          <CardLayout style={{width: "300px", height: "250px"}}>
          <CardIcon src={grammarcard} />
            <CardH2>English Grammar Quiz</CardH2>
          </CardLayout>
          </Link>
        </CardWrapper>
        </>
    )
}