import zonebg from '../../images/tramzone.png';
import mykiPic from '../../images/mykiPic.png';
 import { height } from '@mui/system';

export const faqs = [
    {
      question: "Where to buy and top up a Myki card?",
      answer:
        <ol style={{marginLeft: "10px"}}>
        <li>Hundreds of shops including all 7-Elevens within the Myki boundary</li>
        <li>Myki machines at selected stations and stops</li>
        <li>Your Android phone, via Google Pay</li>
        <li>Premium station ticket offices</li>
        <li>PTV Hubs</li>
        <li>Online</li>
        <li>By calling 1800 800 007. Allow seven days for delivery of a myki and around 90 minutes for online top ups</li>
        <li>Register or log-in to manage your myki and set auto top up</li></ol>
    },
    {
      question: "Full Fare, Concession and Child",
      answer:
      <div>
         <img src={mykiPic} alt="" style={{width: "300px", height:"300px", marginLeft:"20%"}}/>
        <p style={{marginLeft: "-12px"}}>
          Full fare ($6 for myki card)
          <ol style={{marginLeft: "50px"}}>
          <li>Adults aged 19 and over with no concession entitlement</li>
          <li>International visitors aged 19 and over</li>
          </ol>
          Concession ($3 for myki card)
          <ol style={{marginLeft: "50px"}}>
          <li>Cardholders of a Victorian Health Care Card, Australian Pensioner Concession Card or PTV ID 
            (Primary, Secondary, Tertiary or Asylum Seeker)</li>
          </ol>
          Child ($3 for myki card)
          <ol style={{marginLeft: "50px"}}>
          <li>Children aged 5 to 18 (including children from other states and international visitors)</li>
          <li>Children aged 16 and under don't need to carry proof of age</li>
          <li>Teenagers aged 17 and 18 must carry government-issued proof of age ID (such as a passport, learner permit, or Proof of Age card), 
            or another concession entitlement (such as a PTV School Student ID or Health Care Card)</li>
          </ol>
        </p>
         </div>
    },
    {
      question: "Zone 1 & Zone 2",
      answer:
      <div style={{marginLeft: "-12px"}}>
        <img src={zonebg} alt="" style={{width: "566px"}}/>
      Metropolitan zones determine the Myki fares for metropolitan trains, trams and buses. Metropolitan zones include
      <ol style={{marginLeft: "50px"}}>
      <li>Free Tram Zone (applies to tram only)</li>
      <li>Zone 1</li>
      <li>Zone 2</li>
      <li>Zone 1/2 boundary overlap</li>
      </ol>
      </div>,
    },
    {
      question: "Myki Pass, Myki Money and iUSEpass",
      answer:
        <p style={{marginLeft: "-12px"}}>
          If you travel occasionally, pay as you go with myki Money. Load a dollar amount onto your myki and your myki will automatically calculate the lowest fare possible as you touch on and touch off.
          To be eligible for an iUSEpass, you need to be either
          <ol style={{marginLeft: "50px"}}>
      <li>a full-time international student</li>
      <li>enrolled in a bachelor or associate degree, diploma or advanced diploma</li>
      <li>studying at an educational institute that’s signed up to the iUSEpass program.</li>
      </ol>
        </p>,
    },
  ];
