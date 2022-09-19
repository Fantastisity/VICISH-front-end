import React from "react";
import "./explorePg.css";
import { useNavigate } from "react-router-dom";
import landmarkPic from "../../images/landmark.jpg";
import musicPic from "../../images/music.jpg";
import outdoorPic from "../../images/outdoor.jpg";

const ExplorePg = () => {
  let navigate = useNavigate();
  const routeChange = () => {
    let path = `./outdoor`;
    navigate(path);
  };

  const exploreContents = [
    {
      pic: landmarkPic,
      title: "Landmarks",
      content:
        "Discover Melbourne's best attractions and landmarks including beautiful gardens, impressive buildings, sporting arenas, markets and famous laneways.",
    },
    {
      pic: musicPic,
      title: "Live music",
      content:
        "Melbourne is widely known as one of the world's great music cities. Discover dedicated live music venues in Melbourne.",
    },
    {
      pic: outdoorPic,
      title: "Outdoor Artworks",
      content:
        "Discover Melbourne's outdoor artwork such as memorials and sculptures located around the city.",
    },
  ];

  return (
    <div style={{ backgroundColor: "#FFF4E2", height: "2580px" }}>
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
      <div style={{ display: "flex", cursor: "pointer" }} onClick={routeChange}>
        {exploreContents.map((ecs, index) => (
          <div
            className="content-item"
            key={index}
            style={{
              marginLeft: "4rem",
              marginTop: "3rem",
              marginRight: "2rem",
              width: "30rem",
            }}
          >
            <img
              src={ecs.pic}
              style={{
                width: "22rem",
                height: "15rem",
                display: "block",
                marginLeft: "auto",
                marginRight: "auto",
              }}
            />
            <div style={{ textAlign: "center", width: "22rem" }}>
              <h3>{ecs.title}</h3>
              <p>{ecs.content}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ExplorePg;
