import React from "react";
import exploreBg from "../../images/exploreBg.png";
import Divider from "@mui/material/Divider";
import safePic from "../../images/safePic.jpg";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import { styled } from "@mui/material/styles";
import "./safePg.css";
import { Link } from "react-router-dom";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

const SafePg = () => {
  return (
    <div style={{ backgroundColor: "#FFF4E2" }}>
      <div
        className="headerBg"
        style={{ backgroundImage: `url(${exploreBg}`, backgroundSize: "cover", fontSize: "65px" }}
      >
        Health and safety
      </div>
      <section>
        <div
          style={{
            textAlign: "center",
            marginLeft: "25%",
            display: "block",
            paddingTop: "5%",
            paddingBottom: "5%",
            width: "50%"
          }}
        >
          <h1>
            Australia is generally a very safe place to live and study, but it
            is still important to be aware of the risks that exist.
          </h1>
        </div>
      </section>
      <Divider style={{ color: "black" }} />
      <section>
        <div
          style={{
            marginTop: "5%",
            textAlign: "center",
            justifyContent: "center",
            display: "block",
          }}
        >
          <img src={safePic} alt="Health-and-Safety-Tourism-Australia"></img>
        </div>
      </section>
      <section style={{ padding: "10%", marginTop:"-5%" }}>
        <div style={{ textAlign: "center", paddingBottom: "5%", color: "#ed674c" }}>
          <h2>Browse Topics</h2>
        </div>

        <Box sx={{ width: "80%" }} style={{ marginLeft: "10%", marginTop:  "2%" }}>
          <Grid
            container
            rowSpacing={1}
            columnSpacing={{ xs: 1, sm: 2, md: 3 }}
          >
            <Grid item xs={6}>
            <Link to='/Emergency' style={{ textDecoration: 'none',color: "black"  }}>
              <Item className="box">
                <h1>Emergencies</h1>
                <p>
                  Emergency services in Australia are widespread and well
                  equipped to support you. Learn more about our fire, ambulance,
                  and police services so you are prepared.
                </p>
              </Item>
              </Link>
            </Grid>
            <Grid item xs={6}>
            <Link to='/transport-personal' style={{ textDecoration: 'none',color: "black"  }}>
              <Item className="box">
                <h1>Transport and personal</h1>
                <p>
                  Australia is a friendly and safe place to live and study,
                  however, there are practical steps you can take to stay safe.
                </p>
              </Item>
              </Link>
            </Grid>
            <Grid item xs={6}>
            <Link to='/sun-and-water' style={{ textDecoration: 'none',color: "black"  }}>
              <Item className="box">
                <h1>Sun and water</h1>
                <p>
                  Australia is known for its warm climate and beautiful beaches,
                  but it is important to stay safe when outdoors or in the
                  water. See how you can enjoy it safely.
                </p>
              </Item>
              </Link>
            </Grid>
            <Grid item xs={6}>
            <Link to='/fire' style={{ textDecoration: 'none',color: "black"  }}>
              <Item className="box">
                <h1>Fire</h1>
                <p>
                  Fire awareness is essential in Australia, whether you are in
                  urban or rural areas. Follow these practical tips to ensure
                  you are prepared.
                </p>
              </Item>
              </Link>
            </Grid>
          </Grid>
        </Box>
        <div style={{textAlign:"center", paddingTop: "3%"}}>
          <p style={{fontSize:"23px"}}>
            Australia is generally a very safe and welcoming place to live and
            study, consistently ranking among the safest countries in the world.
            But it is still important to look after yourself and be aware of the
            risks that exist - and ways to minimise them. This is particularly
            important for when you first arrive and are adjusting to your new
            way of life. Following your common sense and best practices will
            ensure you remain safe and healthy, whether you are handling
            emergencies, personal and home safety, or natural elements such as
            sun, water, and fire.
          </p>
        </div>
      </section>
    </div>
  );
};

export default SafePg;
