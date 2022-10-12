import React from "react";
import exploreBg from "../../images/exploreBg.png";
import { Link } from "react-router-dom";
import backicon from "../../images/back.png";
const SubSafePg3 = () => {
  return (
    <div style={{ backgroundColor: "#FFF4E2" }}>
      <div
        className="headerBg"
        style={{ backgroundImage: `url(${exploreBg}`, backgroundSize: "cover" }}
      >
        Sun and water safety
      </div>
      <Link to="/health-and-safety">
              <img src={backicon} alt="" style={{width: "23px", position: "absolute", marginTop: "2%", marginLeft: "3%"}}/>
            </Link>
      <div style={{textAlign:"center", padding:"5%"}}>
        <h3>Australia is known for its warm climate and beautiful beaches, but it is important to stay safe when outdoors or in the water. See how you can enjoy it safely.</h3>
      </div>
      <section>
        <div style={{paddingLeft:"30%", paddingRight:"30%", paddingBottom:"5%"}}>
            <p>The Australian sun can be very hot and may be stronger than what you are used to in your home country.</p>
            <br></br>
            <p>There are some steps you can take to protect your skin:</p>
            <br></br>
            <ul style={{listStyleType: 'circle', marginLeft: "7%"}}>
                <li>Check the weather forecast before you plan on being outdoors</li>
                <li>Wear sunscreen protection (such as SPF30+ water resistant sun cream) and apply before you go outside.</li>
                <li>Apply sunscreen at least 25-30 minutes before swimming and ensure you re-apply sunscreen after swimming.</li>
                <li>Wear a hat and UV protective sunglasses.</li>
                <li>Avoid spending time in the direct sun between 10am and 4pm, as this is when the sun is strongest.</li>
                <li>Make sure you follow these tips even when it isn’t sunny – you can still get burnt on cloudy or overcast days.</li>
            </ul>
            <br></br>
            <p>Australia has many beautiful beaches and waterways, but it is important to take care when swimming. Here are some tips for staying safe in the water:</p>
            <br></br>
            <ul style={{listStyleType: 'circle', marginLeft: "7%"}}>
                <li>Never dive into water if you are not sure how deep it is.</li>
                <li>Only swim at patrolled beaches (a beach where there are lifeguards on duty - look for signs) and always swim between the red and yellow flags where lifeguards can see you.</li>
                <li>Many Australian beaches have ‘rips’. These are strong underwater currents that can be hard to spot but which can draw you away from the shore quickly. If you swim between the flags you should not have any problem with rips. If you do find yourself in a rip, try not to panic or swim against it. Stay with your surfboard or other floating device if you have one. Swim gently parallel to the beach out of the rip zone, or wave and call for assistance from lifeguards or other swimmers and surfers.</li>
            </ul>
        </div>
      </section>
    </div>
  );
};

export default SubSafePg3;