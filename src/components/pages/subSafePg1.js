import React from "react";
import exploreBg from "../../images/exploreBg.png";
import { Link } from "react-router-dom";
import backicon from "../../images/back.png";
const SubSafePg1 = () => {
  return (
    <div style={{ backgroundColor: "#FFF4E2" }}>
      <div
        className="headerBg"
        style={{ backgroundImage: `url(${exploreBg}`, backgroundSize: "cover" }}
      >
        Information for emergencies
      </div>
      <Link to="/health-and-safety">
              <img src={backicon} alt="" style={{width: "23px", position: "absolute", marginTop: "2%", marginLeft: "3%"}}/>
            </Link>
      <div style={{textAlign:"center", padding:"5%"}}>
        <h3>Emergency services in Australia are widespread and well equipped to support you. Learn more about our fire, ambulance, and police services so you are prepared.</h3>
      </div>
      <section>
        <div style={{paddingLeft:"30%", paddingRight:"30%", paddingBottom:"5%"}}>
            <p>The assistance and emergency networks in Australia are widespread and well equipped for any potential emergencies. Fire, ambulance, and police services will be able to provide you with any health and safety assistance you may need.</p>
            <br></br>
            <p>Wherever you are in Australia, <strong>if there's a life-threatening emergency, call 000 (zero zero zero)</strong>. It's a free call, even from your mobile. An operator will answer and will ask which of the following services you need:</p>
            <br></br>
            <ul style={{listStyleType: 'circle', marginLeft: "7%"}}>
                <li>Police</li>
                <li>Fire</li>
                <li>Ambulance</li>
            </ul>
            <br></br>
            <p>If you're not sure which one you need just tell the operator what you are calling about and they will help guide you. If you don't speak English, tell the operator your language and you will be connected to a translator who will be able to assist.</p>
            <br></br>
            <p>It is important to remain calm. The operator will ask questions, such as: where are you located, what is the emergency, and how many people are involved.</p>
            <br></br>
            <p>Here are some examples of when you should call 000:</p>
            <br></br>
            <ul style={{listStyleType: 'circle', marginLeft: "7%"}}>
                <li>Someone has been seriously injured or is in urgent need of medical help.</li>
                <li>If your life or property is being threatened.</li>
                <li>If you have just witnessed a serious accident or crime.</li>
            </ul>
            <br></br>
            <br></br>
            <p>Most institutions provide on-campus security who can be easily contacted. Their contact details should be in your enrolment information, but if they are not, contact your institution’s international student support staff to get their phone number or office location. </p>
            <br></br>
            <br></br>
            <p>If it's a life-threatening emergency, you should still call 000 even if you are at school or on campus.</p>
        </div>
      </section>
    </div>
  );
};

export default SubSafePg1;