import React from "react";
import exploreBg from "../../images/exploreBg.png";
import { Link } from "react-router-dom";
import backicon from "../../images/back.png";
const SubSafePg2 = () => {
  return (
    <div style={{ backgroundColor: "#FFF4E2" }}>
      <div
        className="headerBg"
        style={{ backgroundImage: `url(${exploreBg}`, backgroundSize: "cover" }}
      >
        Transport and personal safety
      </div>
      <Link to="/health-and-safety">
              <img src={backicon} alt="" style={{width: "23px", position: "absolute", marginTop: "2%", marginLeft: "3%"}}/>
            </Link>
      <div style={{textAlign:"center", padding:"5%"}}>
        <h3>Australia is a friendly and safe place to live and study, however, there are practical steps you can take to stay safe.</h3>
      </div>
      <section>
        <div style={{paddingLeft:"30%", paddingRight:"30%", paddingBottom:"5%"}}>
            <p>While Australia is generally a safe place to live and study, it is still important that you take precautions to reduce the chance of an incident occurring. need.</p>
            <br></br>
            <h1>Public transport</h1>
            <p>Public transport is reliable and widely used in Australia, particularly in metro and urban areas. A number of security measures have been implemented to maximise the safety of public transport users including security officers and guards, help points, good lighting and security cameras. However you should still use caution when travelling on public transport:</p>
            <br></br>
            <ul style={{listStyleType: 'circle', marginLeft: "7%"}}>
                <li>Avoid isolated bus, rail and tram stops.</li>
                <li>Check transport timetables to avoid long waits, particularly at night.</li>
                <li>Train carriages nearest to the driver or guard are lit and safest at night.</li>
                <li>f you find yourself left in a train carriage on your own or with only one other person you may feel more comfortable moving to another carriage.</li>
            </ul>
            <br></br>
            <h1>Road safety</h1>
            <p>Roads in Australia are generally well maintained, and, within city and urban areas, have good lighting and signage. However, roads are often shared betweem large and small vehicles, heavy and light rail, bicycles and even pedestrians. </p>
            <br></br>
            <p>For this reason, road safety awareness is very important for international students who may not be familiar with Australian road conditions.</p>
            <br></br>
            <p>As road users, international students in Australia should consider:</p>
            <br></br>
            <ul style={{listStyleType: 'circle', marginLeft: "7%"}}>
                <li>Australian's drive on the left side of the road.</li>
                <li>Wearing seat belts is mandatory in private vehicles (including taxis and ride-share).</li>
                <li>There are strict controls on alcohol limits for drivers (0.05). It is best to avoid drinking if you are planning to drive.</li>
                <li>Mobile (cell) phone use while driving is strictly prohibited in all Australian states and territories with harsh fines and penalties for offenders.</li>
                <li>Wearing of bicycle helmets is also mandatory for cyclists.</li>
                <li>It is safest to exit a vehicle from the kerb-side - always watch for cyclists and pedestrians before you open your door</li>
            </ul>
            <br></br>
            <br></br>
            <br></br>
            <p>Bicycle and scooter use in Australia (including e-bikes and e-scooters) has increased greatly, especially in inner city areas where many students live, work and hang out. It is important to use bicycle lanes, observe road rules and make sure that bikes are well-lit at night when riding home.</p>
            <br></br>
            <h1>Taxis</h1>
            <p>Some tips when using taxis in Australia:</p>
            <br></br>
            <ul style={{listStyleType: 'circle', marginLeft: "7%"}}>
                <li>Sit wherever you feel most comfortable – it is normal for passengers to sit in the front or the rear of the taxi.</li>
                <li>Always ensure you know the address of your destination before getting into the taxi.</li>
                <li>Tell the driver the route you would like to take to your destination, and don’t be afraid to speak up if the driver takes you a different route, particularly one you are unfamiliar with.</li>
                <li>If you don’t want the driver to know exactly where you live, get them to drop you off a short distance away.</li>
            </ul>
            <br></br>
            <br></br>
            <h1>Going out</h1>
            <p>When you are out with friends or by yourself, here are some simple things to consider:</p>
            <br></br>
            <ul style={{listStyleType: 'circle', marginLeft: "7%"}}>
                <li>Always plan your trip home, especially at night. You may want to pre-book a taxi or arrange transport with a friend. Always make sure you have enough money to get home.</li>
                <li>Try to travel with a friend or in a group.</li>
                <li>Keep your bag and belongings close to your body and where you can always see them.</li>
                <li>Never hitch hike.</li>
                <li>If you don’t have a mobile phone, make sure you have a phone card or money to make a phone call.</li>
                <li>Where available, use pedestrian walkways and cross the street at pedestrian crossings or lights.</li>
                <li>Leave valuables at home if you don't need to take them with you. This includes jewellery, electronic equipment such as iPads and your passport. If you've recently arrived and don't have anywhere permanent to live yet, talk to your institution’s international student support staff about secure storage facilities on campus.</li>
                <li>Don't carry large amounts of money with you. You can access your money at ATMs found in shops, supermarkets, petrol stations, shopping malls, bars, shop fronts and many other public places.</li>
                <li><strong>Call 000 in the event of an emergency.</strong>Remember, calls to 000 are free of charge.</li>
            </ul>
            <br></br>
            <h1>At school or on campus</h1>
            <p>When you are at your institution during the day or night, here are some tips to help keep you safe:</p>
            <br></br>
            <ul style={{listStyleType: 'circle', marginLeft: "7%"}}>
                <li>Make sure you are aware of the security and emergency arrangements at your institution and in your local area. Your institution should provide you with this information either in your information pack or once you arrive.</li>
                <li>Some large institutions offer security escort services or bus shuttle services for out of office hours. Contact your institution directly to see if this is a service they offer.</li>
                <li>If you drive to your institution, try to park close to your destination and use well-lit car parks.</li>
                <li>When leaving your institution at night try to walk with a friend or group, and take paths that are well lit and ideally frequently used by other people.</li>
            </ul>
            <br></br>
            <h1>Using the internet</h1>
            <br></br>
            <p>International students often spend many hours online, on their computers and/or mobile phone. These are an essential tool for staying connected with family and new friends in Australia. However, the use of online devices carries risks and it is important for all students to protect themselves online. Australia is a world leader in identifying online abuse, with its 
                <a href="https://www.esafety.gov.au/key-issues">eSafety Commissioner website.</a>
            </p>
        </div>
      </section>
    </div>
  );
};

export default SubSafePg2;