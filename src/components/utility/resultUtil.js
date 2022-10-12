import React, {useState,useEffect} from "react";
import ReactCardFlip from "react-card-flip";

export const RecipeResultView = ({
    label,
    cuisinetype,
    dietlabel,
    calories,
    dishtype,
    ingredtype,
    mealtype,
    fig,
    digests
  }) => {
    const [isFlipped, setIsFlipped] = useState(false);
    return (
      <ReactCardFlip isFlipped={isFlipped} flipDirection="horizontal">
      <div
      onClick={() => setIsFlipped((prev) => !prev)}
      className="CardView">
        <h2>{label}</h2>
        <p>Total Calories: {calories}</p>
        <p>Cuisine: {!cuisinetype ? "unknown" : cuisinetype}</p>
        <p>Diet: {!dietlabel ? "unknown" : dietlabel}</p>
        <p>Dish: {!dishtype ? "unknown" : dishtype}</p>
        <p>Meal Type: {!mealtype ? "unknown" : mealtype}</p>
        <img className="recipeimg" src={fig} alt=""/>
      </div>
      <div
        onClick={() => setIsFlipped((prev) => !prev)}
        className="CardView"
      >
        <h5>Ingredients:</h5>
          <ul>
          {ingredtype.map((res, idx) => (
            <li key={idx}>{res.text}</li>
        ))}
        </ul>
        <h5> Digests:</h5>
        <ul>
          {digests.map((res, idx) => {
            return res.label === "Fat" || res.label === "Protein" ? <li key={idx}>{res.label}: {res.total.toFixed(0)}</li> : <></>
          })}
        </ul>
      </div>
      </ReactCardFlip>
    );
  };

  export const DailyMenuResultView = ({
    id,
    title,
    time,
    servings,
    url
  }) => {
    const [imageUrl, setImageUrl] = useState("");

  useEffect(() => {
    fetch(
      `https://api.spoonacular.com/recipes/${id}/information?apiKey=3475b1fed03849a3a06cdf32fa88bfcc&includeNutrition=false`
    )
      .then((response) => response.json())
      .then((data) => {
        setImageUrl(data.image);
      })
      .catch(() => {
        console.log("error");
      });
  }, [id]);
    return (
      <div className="CardView1">
          <h2>{title}</h2>
          <p>Preperation Time: {time}</p>
          <p>Number of Servings: {!servings ? "unknown" : servings}</p>
          <img className="menuimg" src={imageUrl} alt=""/>
          <a className="recipeRedir" href={url}>View Recipe</a>
      </div>
    );
  };