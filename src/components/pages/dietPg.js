import React from "react";
import  "../general/NewCard.css";
import { CardWrapper, CardLayout, CardH2, CardIcon } from './infoSection/element';
import { Link } from "react-router-dom";
import recipecard from '../../images/recipecard.jpg';
import plancard from '../../images/plancard.jpg';

export default function Diet() {
    return (
        <>
        <div className="headerBg">Diet</div>
        <CardWrapper style={{ marginLeft: "361px", marginTop: "60px"}}>
        <Link to='/recipe' style={{ textDecoration: 'none' }}>
          <CardLayout style={{width: "300px", height: "250px"}}>
            <CardIcon src={recipecard} />
            <CardH2>Recipe</CardH2>
          </CardLayout>
          </Link>
          <Link to='/meal-plan' style={{ textDecoration: 'none' }}>
          <CardLayout style={{width: "300px", height: "250px"}}>
          <CardIcon src={plancard} />
            <CardH2>Meal Plan</CardH2>
          </CardLayout>
          </Link>
        </CardWrapper>
        </>
    )
}