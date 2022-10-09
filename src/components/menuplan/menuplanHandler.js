import React, { useState, useEffect, Fragment, useRef } from 'react';
import mealbg from '../../images/mealbg.png';
import "./menuplan.css"
import {DailyMenuResultView} from '../utility/resultUtil';
import {
    Box,
    Grid,
    TextField,
    Radio,
    RadioGroup,
    Button,
    FormControlLabel,
    FormControl,
    FormLabel,
    Checkbox
  } from '@material-ui/core';

  //3c1894a19b6e4e4aabeedcc086536983
  //3475b1fed03849a3a06cdf32fa88bfcc
  //7a78d382854b44d19e47ddfb04ae36fc

export const MenuPlanner = () => {
    const [meal, setMeal] = useState(null);
    const [enteredVege, setEnteredVege] = useState(false);
    const [enteredCal, setEnteredCal] = useState("");
    const [enteredTime, setEnteredTime] = useState("day");
    const [FinalQuery, setfinalQuery] = useState("");
    const isMounted = useRef(false);

    const menuPlan = () => {
      if (!meal || meal === null) return <></>
      if (meal[0] === "ERROR!") return (
      <div className='ErrorMsg'>
        <h3>No More Searches Available Today</h3>
      </div>
      )
      if (meal.hasOwnProperty("week")) {
        let weekmeal = meal.week;
        return(
        <div className='WeeklyMeal'>
            <div>
            <h3>Monday</h3>
            {
              weekmeal.monday.meals.map(res => (
                <DailyMenuResultView
                  id={res.id}
                  title={res.title}
                  time={res.readyInMinutes}
                  servings={res.servings}
                  url={res.sourceUrl}
                />
              ))
            }
            </div>
            <div>
            <h3>Tuesday</h3>
            {
              weekmeal.tuesday.meals.map(res => (
                <DailyMenuResultView
                  id={res.id}
                  title={res.title}
                  time={res.readyInMinutes}
                  servings={res.servings}
                  url={res.sourceUrl}
                />
              ))
            }
            </div>
            <div>
            <h3>Wednesday</h3>
            {
              weekmeal.wednesday.meals.map(res => (
                <DailyMenuResultView
                  id={res.id}
                  title={res.title}
                  time={res.readyInMinutes}
                  servings={res.servings}
                  url={res.sourceUrl}
                />
              ))
            }
            </div>
            <div>
            <h3>Thursday</h3>
            {
              weekmeal.thursday.meals.map(res => (
                <DailyMenuResultView
                  id={res.id}
                  title={res.title}
                  time={res.readyInMinutes}
                  servings={res.servings}
                  url={res.sourceUrl}
                />
              ))
            }
            </div>
            <div>
            <h3>Friday</h3>
            {
              weekmeal.friday.meals.map(res => (
                <DailyMenuResultView
                  id={res.id}
                  title={res.title}
                  time={res.readyInMinutes}
                  servings={res.servings}
                  url={res.sourceUrl}
                />
              ))
            }
            </div>
            <div>
            <h3>Saturday</h3>
            {
              weekmeal.saturday.meals.map(res => (
                <DailyMenuResultView
                  id={res.id}
                  title={res.title}
                  time={res.readyInMinutes}
                  servings={res.servings}
                  url={res.sourceUrl}
                />
              ))
            }
            </div>
            <div>
            <h3>Sunday</h3>
            {
              weekmeal.sunday.meals.map(res => (
                <DailyMenuResultView
                  id={res.id}
                  title={res.title}
                  time={res.readyInMinutes}
                  servings={res.servings}
                  url={res.sourceUrl}
                />
              ))
            }
            </div>
        </div>
      );}
      return(
        <div className='DailyMeal'>
        {
          meal.map(res => (
            <DailyMenuResultView
              id={res.id}
              title={res.title}
              time={res.readyInMinutes}
              servings={res.servings}
              url={res.sourceUrl}
            />
          ))
        }
        </div>
      );
    }

    const submitHandler = (e) => {
      e.preventDefault();
      isMounted.current = true;
      var tmp = "timeFrame=" + enteredTime;
      if (enteredCal && enteredCal !== null) tmp += "&targetCalories=" + enteredCal;
      if (enteredVege) tmp += "&diet=vegetarian";
      setfinalQuery(tmp);
    };

    useEffect(() => {
      if (isMounted.current) {
        fetch(`https://api.spoonacular.com/mealplanner/generate?apiKey=3475b1fed03849a3a06cdf32fa88bfcc&${FinalQuery}`, 
        {method: 'GET'}).then((response) => {
          if (response.status >= 400 && response.status < 600) {
            throw new Error("Bad response from server");
          }
          return response;
        })
        .then((response) => response.json())
        .then((data) => {
          if (isMounted) {
            if (data.hasOwnProperty("week")) setMeal(data);
            else setMeal(data.meals);
          }
        })
        .catch((e) => {
          setMeal(["ERROR!"])
        });
      }
      }, [FinalQuery]);

      return (
        <>
        <img className = "recipeBg" src={mealbg} alt="a balloon"/>
        <div className="menuplanMain">
        <Fragment>
        <Box px={3} py={2}>
        <Grid item xs={12} sm={12}>
            <TextField
              id="query"
              name="query"
              type="number"
              label="Enter Desired Calories (eg. 2000)"
              variant='outlined'
              value={enteredCal}
              onChange={(e) => setEnteredCal(e.target.value)}
              style = {{width: "280px", marginLeft: "150px"}}
              margin="dense"
            />
            <Grid container spacing={1}>
            <Grid item xs={12} sm={12} style = {{marginLeft: "160px", marginTop: "20px"}}>
              <FormControl>
              <FormLabel id="mealatime">Meal Time</FormLabel>
              <RadioGroup
                row
                aria-labelledby="mealtime"
                defaultValue="day"
                onChange={(e) => setEnteredTime(e.target.value)}
                style = {{width: "190px"}}
              >
                <FormControlLabel value="day" control={<Radio />} label="Day" />
                <FormControlLabel value="week" control={<Radio />} label="Week" />
              </RadioGroup>
            </FormControl>
            </Grid>
            <Grid item xs={12} sm={12}>
              <FormControl>
              <FormControlLabel
                  label="I'm vegetarian"
                  value={enteredVege}
                  style = {{marginLeft: "450px", marginTop: "-130px", width: "200px"}}
                  control={
                    <Checkbox
                      onChange={(e) => setEnteredVege(!enteredVege)}
                    />
                  }
                />
            </FormControl>
            </Grid>
            </Grid> 
        </Grid>
        <Box mt={3}>
            <Button
              color="secondary"
              variant='contained'
              onClick={(e) => submitHandler(e)}
              style = {{marginLeft: "450px", marginTop: "10px", width: "180px"}}
            >
              Get Meal Plan
            </Button>
          </Box>
        </Box>
        </Fragment>
        </div>
        <div>
          {
          menuPlan()
          }
        </div>
        </>
      );
}