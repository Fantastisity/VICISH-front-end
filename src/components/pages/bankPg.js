import React, { useEffect, useState } from "react";
import "./bankPg.css";
import ContactSupportIcon from "@mui/icons-material/ContactSupport";
import Tooltip, { TooltipProps, tooltipClasses } from "@mui/material/Tooltip";
import Checkbox from "@mui/material/Checkbox";
import FormControlLabel from "@mui/material/FormControlLabel";
import "../general/BankCard.css";
import Chart from "react-apexcharts";
import { Slide, Zoom } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
import COMM from "../../images/common.webp";
import ANZ from "../../images/ANZ.jpeg";
import WEST from "../../images/west.jpg";
import NBA from "../../images/nba.webp";
import accountPic from "../../images/accountPic.png";
import chequePic from "../../images/chequePic.png";
import creditPic from "../../images/creditPic.png";
import { borderColor, height } from "@mui/system";
import bankBg from "../../images/exploreBg.png";

const openInNewTab = (url) => {
  window.open(url, "_blank", "noopener,noreferrer");
};

const slideImages = [
  {
    pic: COMM,
    caption: "https://www.commbank.com.au/",
  },
  {
    pic: ANZ,
    caption: "https://www.anz.com.au/personal/",
  },
  {
    pic: WEST,
    caption: "https://www.westpac.com.au/",
  },
  {
    pic: NBA,
    caption: "https://www.nab.com.au/",
  },
];

const zoomOutProperties = {
  duration: 3000,
  transitionDuration: 400,
  infinite: true,
  indicators: true,
  scale: 0.9,
  arrows: true,
};

const Slideshow = () => {
  return (
    <div className="slide-container">
      <Slide {...zoomOutProperties}>
        {slideImages.map((each, index) => (
          <div>
            <img
              key={index}
              style={{ width: "100%", height: "40rem", backgroundSize:"cover"}}
              src={each.pic}
            />
            <button
              className="web-button"
              onClick={() => openInNewTab(each.caption)}
            >
              Explore More
            </button>
          </div>
        ))}
      </Slide>
    </div>
  );
};

const accounts = [
  {
    id: 1,
    type: "The transaction account",
    explain:
      "The transaction account is the most common account that can be used for daily expenses, deposits, money access, shopping, paying off bills, and withdrawing money from an ATM.",
    color: "#F0BA98",
    bg: accountPic
  },
  {
    id: 2,
    type: "The savings account",
    explain:
      "The savings account is a ready to go account, which is linked to your everyday bank account. It is different from the transaction account as it allows you to earn interest on your balance.",
    color:"#EC7F6A",
    bg: creditPic
  },
  {
    id: 3,
    type: "The student account ",
    explain:
      "The student account comes with the same features as a transaction account but has some extra perks. For example, no extra fees needed when depositing cash or withdrawing from an ATM on a monthly or annual basis.",
    color: "#f87b73",
    bg: chequePic
  },
];

const userData = [
  {
    name: (
      <div className="checkBoxSection">
        <h2>Worth 70 Points</h2>
        <p>
          Passport
          <br />
          Citizenship
          <br />
          Birth Certificate
        </p>
        <br /> 
      </div>
    ),
    note: "Note: You can only get points for one item in this section",
  },
  {
    name: (
      <div className="checkBoxSection">
         <h2>Worth 40 Points</h2>
        <p>
          Student card
          <br />
          or Proof of age card
          <br />
          or Australian Drivers Licence
          <br />
          or Confirmation of enrolment(COE)
          <br />
          or Health care card
          <br />
          or Health insurance document
        </p>
        <br />
      </div>
    ),
    note: "Note: These cards must have a photograph or signature",
  },
  {
    name: (
      <div className="checkBoxSection">
         <h2>Worth 25 Points</h2>
        <p>
          Any card with your name on it:
          <br />
          · Store account card
          <br />
          · Library card
          <br />
          · Credit card
          <br />
          · Union card
          <br />
          · Medicare card
          <br />· Video Store Card
        </p>
        <br />
        <p>
          Other documents with your name and address:
          <br />
          · Car registration
          <br />
          · Rental receipts
          <br />· Utility bill
        </p>
      </div>
    ),
    note1: "Example: Monash Student Card",
    note2: "Example: Water bill with name and address",
  }
];

const BankPg = () => {
  return (
    <div style={{backgroundColor: "#FFF4E2", height: "100%"}}>
      <div className="headerBg" style={{backgroundImage:`url(${bankBg}`, backgroundSize:"cover", color:"#fff"}}>Set up Bank Account</div>
      <section>
        <div
          style={{
            textAlign: "center",
            marginLeft: "10%",
            display: "block",
            paddingTop: "5%",
            paddingBottom: "1%",
            width: "80%"
          }}
        >
          <h1>
          For international students and their parents, tuition and living expenses are the top priority. Therefore, a secure and stable bank is crucial. This page introduces three common types of bank accounts for students. For more information, visit the official websites of the four major Australian banks. The checklist provides information on what to bring on the day going to set up a bank account in a bank.
          </h1>
        </div>
      </section>
      <div className="mainBankPage">
        <div className="bankCardLayout" style={{marginTop: "-9%", paddingBottom: "5%"}}>
          {accounts.map((account) => (
            <div className="bankcard">
              <div
                style={{
                  backgroundImage: `url(${account.bg})`,
                  backgroundPosition: "center",
                  backgroundSize: "contain",
                  backgroundRepeat: "no-repeat",
                }}
                className="content"
              >
                <div style={{ backgroundColor: account.color }} class="back">
                  <p className="description" style={{marginTop: "-8%", textAlign: "left", fontSize: "15px"}}>{account.explain}</p>
                </div>
              </div>
              <div className="type-name">{account.type}</div>
            </div>
          ))}
        </div>
        <div className="slideLayout">
          <Slideshow />
        </div>
        <div className="checkListBg" style={{backgroundColor: "#D5E5DB", marginTop:"-20%"}}>
          <div className="main-checkBox">
            <form>
              <h2 style={{color: "#EC5F55"}}>Documents Checklist</h2>
              <div style={{textAlign: "center", marginLeft: "-50%", marginTop: "6%", marginBottom: "9%", fontSize: "18px"}}>
              <h4>
              Wondering what to bring on the day going to set up bank account in an Australian bank? Australian banks use a points system for documentation to open an account. You will need to present documents that can add up to 100 or more points.
              </h4>
              </div>
              <div>
              <FormControlLabel control={<Checkbox style={{marginTop: "-35%"}}/>} label={userData[0].name} />
                      <Tooltip title={userData[0].note}>
                        <ContactSupportIcon style={{position: "absolute", marginTop: "6%", marginLeft: "10%"}}>
                          Default Width [300px]
                        </ContactSupportIcon>
              </Tooltip>
              </div>
              <div>
              <FormControlLabel control={<Checkbox style={{marginTop: "-49%"}}/>} label={userData[1].name} />
                      <Tooltip title={userData[1].note}>
                        <ContactSupportIcon style={{position: "absolute", marginTop: "8%", marginLeft: "5%"}}>
                          Default Width [300px]
                        </ContactSupportIcon>
              </Tooltip>
              </div>

              <div style={{width: "100%"}}>
              <FormControlLabel control={<Checkbox  style={{marginTop: "-68%"}}/>} label={userData[2].name} />
                      <Tooltip title={userData[2].note1}>
                        <ContactSupportIcon style={{position: "absolute", marginTop: "8%"}}>
                          Default Width [300px]
                        </ContactSupportIcon>
              </Tooltip>
              <Tooltip title={userData[2].note2}>
                        <ContactSupportIcon style={{marginTop: "20%", position: "absolute"}}>
                          Default Width [300px]
                        </ContactSupportIcon>
                        </Tooltip>
              </div>
            </form>
          </div>
        </div>

        <div>
          <div className="container-fluid mt-3 mb-3" style={{textAlign: "center"}}>
            <h2 className="text-left" style={{color: "#EC5F55", marginTop: "-5%", marginLeft: "-10%"}}>Users Proportion of Big Four Banks</h2>
            <Chart
            className="chartSize"
              type="donut"
              series={[17, 14, 9, 8.5]}
              width="1165"
              options={{
                labels: [
                  "Commonwealth Bank of Australia (CBA)",
                  "Westpac Banking Corporation (WBC)",
                  "National Australia Bank (NBA)",
                  "Australia and NEW Zealand Banking Group (ANZ)",
                ],
                title: {
                  text: "The donut chart below shows the proportion of users' choice between the Four Big Banks in Australia (in millions)",
                  align: 'center'
                },

                legend: {
                  show: true,
                  position: 'top',
                  horizontalAlign: 'center',
                },

                plotOptions: {
                  pie: {
                    offsetX: -20,
                    donut: {
                      labels: {
                        show: true,
                        value: {
                          formatter: function (val) {
                              return val + " million"
                            }
                        },
                        total: {
                          show: true,
                          fontSize: 15,
                          color: "#f90000",
                          formatter: function (w) {
                    return w.globals.seriesTotals.reduce((a, b) => {
                      return a + b
                    }, 0) + " million"
                  }
                        },
                      },
                    },
                  },
                },

                dataLabels: {
                  enabled: true
                },
              }}
            />
          </div>

        </div>
      </div>
    </div>
  );
};

export default BankPg;
