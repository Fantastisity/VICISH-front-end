import React, { useState, useEffect, Fragment, useRef } from 'react';
import {RecipeResultView} from '../utility/resultUtil';
import {cuisineopt, types, dietopt} from './options'
import "./recipe.css"
import recipebg from '../../images/recipebg.jpg';

import {
  Box,
  Grid,
  TextField,
  Typography,
  Select,
  MenuItem,
  Button
} from '@material-ui/core';

const APP_ID="67f8a398"
const APP_KEY="3270c0303944dd3258d476b1c4172ce2"

export const RecipeReq = () => {
  var query = "", cuisine = "Optional", diet = "Optional", type = "Optional"
  const [recipe, setRecipe] = useState([]);
  const [toggle, setToggle] = React.useState(false)
  const [enteredQuery, setEnteredQuery] = useState({value: "", err: false});
  const [enteredCuisine, setEnteredCuisine] = useState("");
  const [enteredDiet, setEnteredDiet] = useState("");
  const [enteredType, setEnteredType] = useState("");
  const [FinalQuery, setfinalQuery] = useState("");
  const isMounted = useRef(false);

  const search = async (val) => {
    const resp = await fetch(
      `https://api.edamam.com/search?${val}&app_id=${APP_ID}&app_key=${APP_KEY}&
      imageSize=Regular`, {method: 'GET'}
    );
    const data = await resp.json();
    return data.hits;
  };

  const checkRecipe = () => {
    if (!recipe || recipe === null) return <></>
    return(
      <div className='Recipes'>
      {
        recipe.map(res => (
          <RecipeResultView
            label={res.recipe.label}
            cuisinetype={res.recipe.cuisineType[0]}
            dietlabel={res.recipe.dietLabels[0]}
            calories={res.recipe.calories.toFixed(0)}
            dishtype={res.recipe.dishType[0]}
            ingredtype={res.recipe.ingredients}
            mealtype={res.recipe.mealType[0]}
            fig={res.recipe.image}
            digests={res.recipe.digest}
          />
        ))
      }
      </div>
    )
  }

  useEffect(() => {
    if (isMounted.current) {
      console.log("right");
      search(FinalQuery).then((data) => {
        if (isMounted) setRecipe(data)
      });
    }
  }, [FinalQuery]);

  const CollapsedElements = () => (
    <div id="AdvancedOptions" style={{ display: 'flex', flexDirection: 'row', height: "5px", marginTop: "33px" }}>
      <Grid container spacing={10} direction="column" alignItems="center" justify="center">
      <Grid item xs={12} sm={12}>
      <Typography variant='body1' color="textPrimary"  style = {{marginLeft: "70px"}}>
          Select Cuisine
        </Typography>
        <Select name='selected' value={enteredCuisine} onChange={(e)=> setEnteredCuisine(e.target.value)} displayEmpty 
        style = {{marginLeft: "90px"}}>
        <MenuItem value={""}>none</MenuItem>
        {cuisineopt.map(option => (
            <MenuItem key={option.id} value={option.name}>
              {option.name}
            </MenuItem>
          ))}
        </Select>
      </Grid>
      <Grid item xs={12} sm={12}>
      <Typography variant='body1' color="textPrimary"  style = {{marginLeft: "10px"}}>
          Select Diet
        </Typography>
        <Select name='selected' value={enteredDiet} onChange={(e)=> setEnteredDiet(e.target.value)} 
        displayEmpty style = {{marginLeft: "24px"}}>
        <MenuItem value={""}>none</MenuItem>
        {dietopt.map(option => (
            <MenuItem key={option.id} value={option.name}>
              {option.name}
            </MenuItem>
          ))}
        </Select>
      </Grid>
      <Grid item xs={12} sm={12}>
      <Typography variant='body1' color="textPrimary"  style = {{marginLeft: "15px"}}>
          Select Meal Type
        </Typography>
        <Select name='selected' value={enteredType} onChange={(e)=> setEnteredType(e.target.value)} displayEmpty 
        style = {{marginLeft: "55px"}}>
        <MenuItem value={""}>none</MenuItem>
        {types.map(option => (
            <MenuItem key={option.id} value={option.name}>
              {option.name}
            </MenuItem>
          ))}
        </Select>
      </Grid>
        </Grid>
    </div>
  )

  const submitHandler = (e) => {
    e.preventDefault();
    isMounted.current = true;
    if (enteredQuery.value === '') {
      setEnteredQuery({...enteredQuery, err: true})
      return;
    }
    setEnteredQuery({...enteredQuery, err: false})
    query = "q=" + enteredQuery.value;
    cuisine = enteredCuisine;
    diet = enteredDiet;
    type = enteredType;
    if (cuisine !== "") {
      query += "&cuisineType=" + cuisine;
    }
    if (diet !== "") {
      query += "&Diet=" + diet;
    }
    if (type !== "") {
      query += "&mealType=" + type;
    }
    setfinalQuery(query)
  };
  return (
    <>
    <img className = "recipeBg" src={recipebg} alt="recipe"/>
    <div className="recipeMain">
    <Fragment>
    <Box px={3} py={2}>
    <Grid item xs={12} sm={12}>
        <TextField
          required
          id="query"
          name="query"
          type="text"
          label="What recipe are you after? (eg. pizza)"
          variant='outlined'
          value={enteredQuery.value}
          onChange={(e) => setEnteredQuery({...enteredQuery, value: e.target.value})}
          onKeyDown={(e) => e.key === 'Enter' && submitHandler(e)}
          style = {{width: "600px", marginLeft: "20px"}}
          margin="dense"
          error={enteredQuery.err}
          helperText={enteredQuery.err && "Cannot Be Empty"}
        />
      </Grid>
    <Box mt={3}>
      <Button
          color="primary"
          variant='contained'
          onClick={(e) => submitHandler(e)}
          style = {{marginLeft: "660px", marginTop: "-70px", width: "140px"}}
        >
          Get Recipes
        </Button>
        <Button
          color="secondary"
          onClick={() => setToggle(!toggle)}
          style = {{marginLeft: "470px", marginTop: "20px", width: "180px"}}
        >
          Advanced Options
        </Button>
      </Box>
      {toggle && <CollapsedElements />}
    </Box>
    </Fragment>
    </div>
      <div>
        {
        checkRecipe()
        }
      </div>
    </>
  );
};