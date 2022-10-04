import React from "react";
import "./explorePg.css";
import landmarkPic from "../../images/landmark.jpg";
import musicPic from "../../images/music.jpg";
import outdoorPic from "../../images/outdoor.jpg";
import { Link } from "react-router-dom";

const ExplorePg = () => {

  return (
    <div style={{ backgroundColor: "#FFF4E2", height: "1000px" }}>
      <div className="headerBg">Explore Melbourne CBD</div>
      <div
        style={{
          marginLeft: "420px",
          marginTop: "30px",
          borderRadius: "60px",
          padding: "25px",
          width: "40%",
          fontSize: "20px",
          textAlign: "center",
        }}
      >
        Wondering where to explore more in Melbourne CBD? Here are some options
        for you to better experience the local culture.
      </div>
      <div style={{ display: "flex", cursor: "pointer", marginLeft: "30px" }}>
          <Link to='/landmarks' style={{ textDecoration: 'none', color: "black" }}>
          <div
            className="content-item"
            style={{
              marginLeft: "4rem",
              marginTop: "3rem",
              marginRight: "2rem",
              width: "22rem",
            }}
          >
            <img
              src={landmarkPic}
              style={{
                width: "22rem",
                height: "15rem",
                display: "block",
                marginLeft: "auto",
                marginRight: "auto",
              }}
            />
            <div style={{ textAlign: "center", width: "22rem"}}>
              <h3>Landmarks</h3>
              <p>Discover Melbourne's best attractions and landmarks including beautiful gardens, impressive buildings, sporting arenas, markets and famous laneways.</p>
            </div>
          </div>
          </Link>

          <Link to='/music-venue' style={{ textDecoration: 'none', color: "black" }}>
          <div
            className="content-item"
            style={{
              marginLeft: "4rem",
              marginTop: "3rem",
              marginRight: "2rem",
              width: "22rem",
            }}
          >
            <img
              src={musicPic}
              style={{
                width: "22rem",
                height: "15rem",
                display: "block",
                marginLeft: "auto",
                marginRight: "auto",
              }}
            />
            <div style={{ textAlign: "center", width: "22rem"}}>
              <h3>Live music</h3>
              <p>Melbourne is widely known as one of the world's great music cities. Discover dedicated live music venues in Melbourne.</p>
            </div>
          </div>
          </Link>

          <Link to='/artworks' style={{ textDecoration: 'none', color: "black" }}>
            <div
              className="content-item"
              style={{
                marginLeft: "4rem",
                marginTop: "3rem",
                marginRight: "2rem",
                width: "22rem",
              }}
            >
              <img
                src={outdoorPic}
                style={{
                  width: "22rem",
                  height: "15rem",
                  display: "block",
                  marginLeft: "auto",
                  marginRight: "auto",
                }}
              />
              <div style={{ textAlign: "center", width: "22rem"}}>
                <h3>Outdoor Artworks</h3>
                <p>Discover Melbourne's outdoor artwork such as memorials and sculptures located around the city.</p>
              </div>
            </div>
          </Link>
      </div>
    </div>
  );
};

export default ExplorePg;
