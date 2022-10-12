import React from "react";
import exploreBg from "../../images/exploreBg.png";
import { Link } from "react-router-dom";
import backicon from "../../images/back.png";
const SubSafePg4 = () => {
  return (
    <div style={{ backgroundColor: "#FFF4E2" }}>
      <div
        className="headerBg"
        style={{ backgroundImage: `url(${exploreBg}`, backgroundSize: "cover" }}
      >
        Fire safety
      </div>
      <Link to="/health-and-safety">
              <img src={backicon} alt="" style={{width: "23px", position: "absolute", marginTop: "2%", marginLeft: "3%"}}/>
      </Link>
      <div style={{textAlign:"center", padding:"5%"}}>
        <h3>Fire awareness is essential in Australia, whether you are in urban or rural areas. Follow these practical tips to ensure you are prepared.</h3>
      </div>
      <section>
        <div style={{paddingLeft:"30%", paddingRight:"30%", paddingBottom:"5%"}}>
            <p>Fire awareness is essential in Australia, even in city and urban areas. </p>
            <br></br>
            <p>If you experience a fire emergency, follow these steps:</p>
            <br></br>
            <ul style={{listStyleType: 'decimal', marginLeft: "7%"}}>
                <li>Call 000 from any phone or mobile – it is a free call even from a mobile phone.</li>
                <li>Say the word “fire” to the operator.</li>
                <li>Don’t speak English? Just tell the operator your language and wait for instructions.</li>
                <li>Answer the questions the operator asks.</li>
            </ul>
            <br></br>
            <h1>Tips for fire prevention</h1>
            <br></br>
            <ul style={{listStyleType: 'circle', marginLeft: "7%"}}>
                <li>Make sure your house or room has a working smoke alarm.</li>
                <li>Wiring and electrical devices can overheat from too much use, especially in older buildings, so don't overload powerboards or double adaptors.</li>
                <li>Keep electric heaters and radiators at least a metre from your bed, furniture or any curtains.</li>
                <li>Remember to turn off all appliances when finished cooking. Most household fires occur in the kitchen when grease, oil or other flammable cooking materials are left on the stove and forgotten.</li>
                <li>Outdoor open fires (including campfires) are strictly prohibited on days of total fire ban. </li>
            </ul>
            <br></br>
            <h1>What to do if there’s a fire</h1>
            <p>In case there's a fire at home, plan a way to get out in advance. Don't block doorways or windows, and make sure you can open your windows – they can get stuck in older buildings. Have a specific place for keys and your phone, so if you have to leave in a hurry you know exactly where they are and can call emergency services.</p>
            <br></br>
            <h1>Bushfires</h1>
            <br></br>
            <p>Australia is a big country. Many international students come to experience the wonders of Australia's great outdoors. Wherever you are studying, there are always bushwalking, beach and camping activities within reach.</p>
            <br></br>
            <p>In the months between October and March, parts of Australia can experience extreme heat and, with that, bushfires. These can be frightening for visitors unfamiliar with these conditions.</p>
            <br></br>
            <p>If you are out in the bush when there is smoke, or a fire, do not ignore the danger. It is important to act early and make a decision. The following advice can help you make the right decision in the event of a nearby bushfire.</p>
            <br></br>
            <ul style={{listStyleType: 'circle', marginLeft: "7%"}}>
                <li>Always plan ahead on days of extreme heat and high winds. If visiting a national park it, contact the visitor information centres for safe tourist activities and locations.</li>
                <li>Let friends know of your travel plans on the day.</li>
                <li>If you have mobile reception, check ABCemergency on Twitter for any bushfire alerts in your area. Call 000 (emergency) if you are in danger and say 'fire' to the operator.</li>
                <li>Do not attempt to drive through a bushfire. Tune your car radio to your local ABC radio station for updates on bushfire emergencies in your area.</li>
                <li>Always carry plenty of drinking water and sun protection as fires can generate intense heat in the area and cause dehydration.</li>
                <li>On days of a total fire ban, open fires (such as camp fires) are strictly prohibited.</li>
                <li>Always follow the advice and instructions of local emergency services, such as the police and fire brigade.</li>
            </ul>
            <br></br>
            <br></br>
            <p>If it's a life-threatening emergency, you should still call 000 even if you are at school or on campus.</p>
        </div>
      </section>
    </div>
  );
};

export default SubSafePg4;