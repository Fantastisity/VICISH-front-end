import React from "react";
import "./StartingPage.css";
import {Card1, Card2} from "./Card";

export const SlangStartingPage = ({
    setShowStartingPage,
    setShowQuestionsPage,
    topScore
}) => {
    const startGame = () => {
        setShowStartingPage(false);
        setShowQuestionsPage(true);
    }

    return (
        <Card1>
            <h1 className="header" style={{marginTop: "100px", fontWeight: "100"}}>Welcome to Slang Quiz Game!</h1>
            <button className="start_btn"  style={{backgroundColor: "#EC7F6A"}}
            onClick={startGame}>Let's play</button>
            <p style={{marginLeft: "210px", fontWeight: "100"}}>Top score: <span>{topScore}</span></p>
        </Card1>
    );
};

export const GrammarStartingPage = ({
    setShowStartingPage,
    setShowQuestionsPage,
    topScore
}) => {
    const startGame = () => {
        setShowStartingPage(false);
        setShowQuestionsPage(true);
    }

    return (
        <Card2>
            <h1 className="header" style={{marginTop: "200px", fontWeight: "100"}}>Welcome to Grammar Ability Test!</h1>
            <button className="start_btn" onClick={startGame} style={{backgroundColor: "#EC7F6A"}}>Let's play</button>
            <p style={{marginLeft: "390px", fontWeight: "100"}}>Top score: <span>{topScore}</span></p>
        </Card2>
    );
};
