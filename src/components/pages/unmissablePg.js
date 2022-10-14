import React, { useState } from "react";
import exploreBg from "../../images/exploreBg.png";
import cityPic from "../../images/city.jpg";
import li1 from "../../images/li1.jpg";
import li2 from "../../images/li2.jpg";
import li3 from "../../images/li3.jpg";
import li4 from "../../images/li4.jpg";
import li5 from "../../images/li5.jpg";
import li6 from "../../images/li6.jpg";
import li61 from "../../images/li61.jpg";
import li7 from "../../images/li7.jpg";
import li8 from "../../images/li8.jpg";
import li9 from "../../images/li9.jpg";
import li10 from "../../images/li10.jpg";
import li11 from "../../images/li11.jpg";
import li111 from "../../images/li111.jpg";
import li12 from "../../images/li12.jpg";
import "./unmissablePg.css"
import Switch from '@mui/material/Switch';
import FormControlLabel from '@mui/material/FormControlLabel';
import StickyBox from "react-sticky-box";
import Divider from "@mui/material/Divider";

const UnmissablePg = () => {
  const [show, setShow] = useState(true);
  return (
    <div style={{ backgroundColor: "#FFF4E2" }}>
      <div
        className="headerBg"
        style={{ backgroundImage: `url(${exploreBg}`, backgroundSize: "cover" }}
      >
        12 Amazing Things to Do in Melbourne
      </div>
      <div style={{ justifyContent: "center", alignItems: "center" }}>
        <div style={{ paddingBottom: "5%" }}>
          <div
            style={{
              justifyContent: "center",
              alignItems: "center",
              textAlign: "center",
              marginTop: "3%",
            }}
          >
            <img src={cityPic} alt=""></img>
          </div>
        </div>
        <StickyBox offsetTop={300} offsetBottom={20}>
          <div
            style={{
              backgroundColor: "#FFE4D8",
              border: "1px solid #aaa",
              padding: "10px",
              width:"15%",
              marginLeft:'1%'
            }}
          >
            <p style={{ textAlign: "center" }}>Content</p>
            <FormControlLabel
        sx={{
          display: 'block',
          marginLeft: "43%"
        }}
        control={
          <Switch checked={show} onChange={() => setShow(!show)} color="primary">toggle</Switch>
        }
        label={show ? "Hide" : "Show"}
      />
            
            {show ? (
              <ul style={{ listStyleType: "none" }}>
                <li style={{marginTop:"1%", marginBottom:'3%'}}>
                  <a href="#1" style={{textDecoration: 'none', color:"black", }}>City Center</a>
                </li>
                <Divider style={{ color: "black"}} />
                <li style={{marginTop:"3%", marginBottom:'3%'}}>
                  <a href="#2" style={{textDecoration: 'none', color:"black"}}>Flinders Street Station</a>
                </li>
                <Divider style={{ color: "black" }} />
                <li style={{marginTop:"3%", marginBottom:'3%'}}><a href="#3" style={{textDecoration: 'none', color:"black"}}>Queen Victoria Market</a></li>
                <Divider style={{ color: "black" }} />
                <li style={{marginTop:"3%", marginBottom:'3%'}}><a href="#4" style={{textDecoration: 'none', color:"black"}}>Melbourne coffee</a></li>
                <Divider style={{ color: "black" }} />
                <li style={{marginTop:"3%", marginBottom:'3%'}}><a href="#5" style={{textDecoration: 'none', color:"black"}}>National Gallery of Victoria (NGV)</a></li>
                <Divider style={{ color: "black" }} />
                <li style={{marginTop:"3%", marginBottom:'3%'}}><a href="#6" style={{textDecoration: 'none', color:"black"}}>St Kilda &amp; Luna Park in Melbourne</a></li>
                <Divider style={{ color: "black" }} />
                <li style={{marginTop:"3%", marginBottom:'3%'}}><a href="#7" style={{textDecoration: 'none', color:"black"}}>Koorie Heritage
                  Trust</a>
                </li>
                <Divider style={{ color: "black" }} />
                <li style={{marginTop:"3%", marginBottom:'3%'}}><a href="#8" style={{textDecoration: 'none', color:"black"}}>Immigration Museum</a></li>
                <Divider style={{ color: "black" }} />
                <li style={{marginTop:"3%", marginBottom:'3%'}}><a href="#9" style={{textDecoration: 'none', color:"black"}}>Street art</a></li>
                <Divider style={{ color: "black" }} />
                <li style={{marginTop:"3%", marginBottom:'3%'}}><a href="#10" style={{textDecoration: 'none', color:"black"}}>Dinning</a></li>
                <Divider style={{ color: "black" }} />
                <li style={{marginTop:"3%", marginBottom:'3%'}}><a href="#11" style={{textDecoration: 'none', color:"black"}}>Royal Botanic Gardens</a></li>
                <Divider style={{ color: "black" }} />
                <li style={{marginTop:"3%", marginBottom:'3%'}}><a href="#12" style={{textDecoration: 'none', color:"black"}}>Eureka Skydeck</a></li>
              </ul>
            ) : null}
          </div>
          </StickyBox>
        <div style={{ paddingLeft: "25%", paddingRight: "25%", marginTop:"-54%", paddingBottom: "5%" }}>
          <p>
          Melbourne is a hub for many interesting things including museums, vintage stores, coffee shops, art galleries, events, festivals etc., there is literally nothing you cannot do in this city! This ultimate guide that will take you through the best places to visit in Melbourne.
          </p>
          <br></br>

          <div>
            <div style={{marginBottom:"3%"}}>
              <h1>
                <span id="1">1. Explore the City Center</span>
              </h1>
              <div
                style={{
                  justifyContent: "center",
                  alignItems: "center",
                  textAlign: "center",
                  marginTop: "2%",
                  marginBottom: "2%",
                }}
              >
                <img src={li1} alt=""></img>
              </div>
              <p>
              There are countless Melbourne city attractions to enjoy and see, and the smartest way to go about it is by taking one of the amazing Melbourne walking tours! Most walking tours take you through the city centre and take you through Melbourne’s top sightseeing spots including Federation Square, Flinders Street Station and more!
              </p>
              <br></br>
              <p>
              NOTE: If you are not the type of person who enjoys walking, did you know there is also the option to hop on the free tram that goes through the city centre?
              </p>
            </div>
            <div style={{marginBottom:"3%"}}>
              <h1>
                <span id="2">2. HOP ON A TRAIN AT FLINDERS STREET STATION</span>
              </h1>
              <div
                style={{
                  justifyContent: "center",
                  alignItems: "center",
                  textAlign: "center",
                  marginTop: "2%",
                  marginBottom: "2%",
                }}
              >
                <img src={li2} alt=""></img>
              </div>
              <p>
              Being the busiest suburban railway street of the Southern Hemisphere, Flinders Street Station is, out of all the places of interest in Melbourne, a must-see!
              </p>
              <br></br>
              <p>
              While at Flinders Street Station, you can admire the beautiful yellow Victorian building, explore its interiors and get lost going up and down the floors. Also check out Federation Square, which is just across the street.
              </p>
              <br></br>
              <p>FUN FACT: Flinders Street Station opened in 1854, which made it the first railway station in an Australian city!</p>
              <br></br>
              <p>PRICE: Free</p>
            </div>

            <div style={{marginBottom:"3%"}}>
              <h1>
                <span id="3">3. EXPLORE QUEEN VICTORIA MARKET</span>
              </h1>
              <div
                style={{
                  justifyContent: "center",
                  alignItems: "center",
                  textAlign: "center",
                  marginTop: "2%",
                  marginBottom: "2%",
                }}
              >
                <img src={li3} alt=""></img>
              </div>
              <p>
              Melbourne is full of BIG things! For instance, Queen Victoria Market has 7 hectares and it’s the biggest open-air market in the Southern Hemisphere!
              </p>
              <br></br>
              <p>
              This market was built in the 19th century and it has since become one of the biggest Melbourne tourist attractions; it’s also a great place to get fresh produce!
              </p>
              <br></br>
              <p>
              FUN FACT: Here’s an interesting story so you can get a better image of the way Australians are: In the 1960s, the mayor of Melbourne wanted to destroy Queen Victoria Market in order to build a parking lot, but the neighbors reacted and forced him to turn the building into a national trust, so that it could never be destroyed!
              </p>
              <br></br>
              <p>PRICE: Free</p>
            </div>

            <div style={{marginBottom:"3%"}}>
              <h1>
                <span id="4">4. TRY THE FAMOUS MELBOURNE COFFEE</span>
              </h1>
              <div
                style={{
                  justifyContent: "center",
                  alignItems: "center",
                  textAlign: "center",
                  marginTop: "2%",
                  marginBottom: "2%",
                }}
              >
                <img src={li4} alt=""></img>
              </div>
              <p>
              Did you know that Melbourne is worldwide famous for its coffee? Not for growing it, but for making an exceptionally good one!
              </p>
              <br></br>
              <p>
              And drinking it is one of the best activities to do in Melbourne! There are so many cafés in Australia’s cultural capital that the chances of you not coming across one of them are almost non-existent.
              </p>
            </div>

            <div style={{marginBottom:"3%"}}>
              <h1>
                <span id="5">5. BECOME AN ART EXPERT AT NATIONAL GALLERY OF VICTORIA (NGV)</span>
              </h1>
              <div
                style={{
                  justifyContent: "center",
                  alignItems: "center",
                  textAlign: "center",
                  marginTop: "2%",
                  marginBottom: "2%",
                }}
              >
                <img src={li5} alt=""></img>
              </div>
              <p>
              What to do in Melbourne when you want to admire some local art? It’s simple, head over to the National Gallery of Victoria!
              </p>
              <br></br>
              <p>
              Once again, another landmark in Melbourne makes it to the Guinness World Record Book! The National Gallery of Victoria (NGV) is Australia’s largest, oldest and most visited art museum and art gallery!
              </p>
              <br></br>
              <p>
              The National Gallery of Victoria displays a permanent exhibition of international art from all over the world that will only take you a couple of hours to see. They have some events from time to time as well, which you can also check on their website!
              </p>
              <br></br>
              <p>PRICE: Free</p>
            </div>

            <div style={{marginBottom:"3%"}}>
              <h1>
                <span id="6">6. EXPLORE ST KILDA AND THE ICONIC LUNA PARK IN MELBOURNE</span>
              </h1>
              <div
                style={{
                  justifyContent: "center",
                  alignItems: "center",
                  textAlign: "center",
                  marginTop: "2%",
                  marginBottom: "2%",
                }}
              >
                <img src={li6} alt=""></img>
              </div>
              <p>
              St Kilda with its historic buildings, seaside restaurants and cafés, beaches and exciting nightlife. 
              </p>
              <br></br>
              <p>
              PRO TIP: If you head to St Kilda Pier after sunset, try to also keep an eye out for penguins coming back home after a day spent fishing! They are present all year round, including the summer!
              </p>
              <div
                style={{
                  justifyContent: "center",
                  alignItems: "center",
                  textAlign: "center",
                  marginTop: "2%",
                  marginBottom: "2%",
                }}
              >
                <img src={li61} alt=""></img>
              </div>
              <br></br>
              <p>
              St. Kilda is also home to Luna Park in Melbourne – a historic amusement park built in 1912, which makes it a retro gem that will turn your Instagram feed into an aesthetic dream! This park is a must see and one of the most fun things to do in Melbourne!
              </p>
              <br></br>
              <p>PRICE: Entry fee is AU$5</p>
            </div>
            
            <div style={{marginBottom:"3%"}}>
              <h1>
                <span id="7">7. LEARN MORE ABOUT ABORIGINAL CULTURE IN KOORIE HERITAGE TRUST</span>
              </h1>
              <div
                style={{
                  justifyContent: "center",
                  alignItems: "center",
                  textAlign: "center",
                  marginTop: "2%",
                  marginBottom: "2%",
                }}
              >
                <img src={li7} alt=""></img>
              </div>
              <p>
              Even though Australia is said to be a “young country”, this couldn’t be further away from the truth! The country is home to the oldest civilisation in the world (60.000 years old).
              </p>
              <br></br>
              <p>
              The Koorie Heritage Trust is a non-for-profit indigenous organization and it is the best way to learn about Aboriginal culture in and around the region of Victoria!
              </p>
              <br></br>
              <p>PRICE: Free</p>
            </div>

            <div style={{marginBottom:"3%"}}>
              <h1>
                <span id="8">8. CELEBRATE MULTICULTURALITY AT THE IMMIGRATION MUSEUM</span>
              </h1>
              <div
                style={{
                  justifyContent: "center",
                  alignItems: "center",
                  textAlign: "center",
                  marginTop: "2%",
                  marginBottom: "2%",
                }}
              >
                <img src={li8} alt=""></img>
              </div>
              <p>
              The Immigration Museum is a museum that celebrates the multiculturality of the world that we live in.
              </p>
              <br></br>
              <p>
              PRO TIP: Make sure you engage in the interactive activities of the Museum – spoiler alert: you can become part of the border control police! So fun!
              </p>
              <br></br>
              <p>PRICE: Entry fee is AU$15</p>
            </div>

            <div style={{marginBottom:"3%"}}>
              <h1>
                <span id="9">9. ADMIRE THE STREET ART AND SCULPTURES</span>
              </h1>
              <div
                style={{
                  justifyContent: "center",
                  alignItems: "center",
                  textAlign: "center",
                  marginTop: "2%",
                  marginBottom: "2%",
                }}
              >
                <img src={li9} alt=""></img>
              </div>
              <p>
              Melbourne is famous for its street art culture! A must see when heading to Melbourne is Hosier Lane, where you’ll always find street artists working on their pieces. You can also check out AC/DC lane and Centre place.
              </p>
              <br></br>
              <p>
              On another note, you’ll find, as you’re walking around Melbourne, that there are plenty of sculptures scattered all throughout the city. Ranging from surrealist to realist, each one of these sculptures shares its own story with those passing by.
              </p>
            </div>

            <div style={{marginBottom:"3%"}}>
              <h1>
                <span id="10">10. Explore Melbourne’s food culture</span>
              </h1>
              <div
                style={{
                  justifyContent: "center",
                  alignItems: "center",
                  textAlign: "center",
                  marginTop: "2%",
                  marginBottom: "2%",
                }}
              >
                <img src={li10} alt=""></img>
              </div>
              <p>
              Melbourne has a wide array of cool restaurants that you can head to! 
              </p>
              {/* <br></br>
              <ul>
                <li>
                    <a href="https://www.easeys.com.au/" target="_blank" rel="noopener noreferrer">Easey’s</a>" – go there if you want to mingle with the young crowd"
                </li>
                <li>
                    <a href="https://www.heroesbar.com.au/" target="_blank" rel="noopener noreferrer">Heroes</a>" – for some karaoke fun"
                </li>
                <li>
                    <a href="https://www.qthotels.com/perth/eat-drink/rooftop-at-qt/" target="_blank" rel="noopener noreferrer">Rooftop at QT</a>"  – for a more sophisticated night out"
                </li>
                <li>
                    <a href="https://bombabar.com.au/" target="_blank" rel="noopener noreferrer">Bomba</a>"  – a rooftop tapas bar, heaven!"
                </li>
                <li>
                    <a href="https://thealbion.bar/" target="_blank" rel="noopener noreferrer">Albion Rooftop Bar</a>" – for a fun night out!"
                </li>
              </ul> */}
              <br></br>
              <p>
              Experience Melbourne's mix of cultures in its myriad restaurants, cafes, bistros and bars. Whether you're after modern, traditional, exotic or homespun flavours – Melbourne's eclectic dining scene offers a startling array of the world's great cuisines, from popular favourites to the truly groundbreaking.
              </p>
            </div>

            <div style={{marginBottom:"3%"}}>
              <h1>
                <span id="11">11. RELAX AT THE ROYAL BOTANIC GARDENS</span>
              </h1>
              <div
                style={{
                  justifyContent: "center",
                  alignItems: "center",
                  textAlign: "center",
                  marginTop: "2%",
                  marginBottom: "2%",
                }}
              >
                <img src={li11} alt=""></img>
              </div>
              <p>
              Visiting the botanic gardens is one of the top things to do in Melbourne! While you’re there, you can even see the Shrine Of Remembrance, a shrine commemorating World War I.
              </p>
              <br></br>
              <p>
              PRO TIP: During the summer, you can attend one of the movie nights organized at the Royal Botanic Gardens! Admission is AU$19 – and you can even bring your own snacks and have a great picnic at the gardens!
              </p>
              <div
                style={{
                  justifyContent: "center",
                  alignItems: "center",
                  textAlign: "center",
                  marginTop: "2%",
                  marginBottom: "2%",
                }}
              >
                <img src={li111} alt=""></img>
              </div>
              <br></br>
              <p>
              NOTE: Another place to relax at is Fitzroy Gardens, just a 20 min walk from the Botanic gardens. 
              </p>
              <br></br>
              <p>PRICE: Free</p>
            </div>

            <div style={{paddomgBottom:"3%"}}>
              <h1>
                <span id="12">12. ENJOY THE VIEW FROM EUREKA SKYDECK</span>
              </h1>
              <div
                style={{
                  justifyContent: "center",
                  alignItems: "center",
                  textAlign: "center",
                  marginTop: "2%",
                  marginBottom: "2%",
                }}
              >
                <img src={li12} alt=""></img>
              </div>
              <p>
              If you’d like to see the city from up high and marvel at its breathtakingly beautiful skyline, you can visit the Eureka Skydeck on the 88th floor of the Eureka Tower! Eureka Tower is a 300m skyscraper that was built in 2006. The view from the skydeck is one of the most stunning panoramic views and photo opportunities in Melbourne – you can actually see the Dandenong Ranges National Park!
              </p>
              <br></br>
              <p style={{paddingBottom:"3%"}}>
              PRICE: AU$23 for adults
              </p>
            </div>
    
          </div>
        </div>
      </div>
    </div>
  );
};

export default UnmissablePg;
