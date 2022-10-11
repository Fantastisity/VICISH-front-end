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
import bankBg from "../../images/bankBg.png";

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
      "The student account comes with the same features as a transaction account but has some extra perks. For example, you don't pay any fees when you deposit cash or withdraw from an ATM on a monthly or annual basis.",
    color: "#f87b73",
    bg: chequePic
  },
];

const userData = [
  {
    name: (
      <div className="checkBoxSection">
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
      </div>
    ),
    note: "Example: Monash Student Card",
  },
  {
    name: (
      <div className="checkBoxSection">
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
    note: "Example: Water bill with name and address",
  },
];

const BankPg = () => {
  return (
    <div style={{backgroundColor: "#FFF4E2", height: "100%"}}>
      <div className="headerBg" style={{backgroundImage:`url(${bankBg}`, backgroundSize:"cover", color:"#000"}}>Set up Bank Account</div>
      <div className="mainBankPage">
        <div className="slideLayout">
          <Slideshow />
        </div>

        <div className="bankCardLayout">
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
                  <p className="description">{account.explain}</p>
                </div>
              </div>
              <div className="type-name">{account.type}</div>
            </div>
          ))}
        </div>

        <div className="checkListBg" style={{backgroundColor: "#D5E5DB"}}>
          <div className="main-checkBox">
            <form>
              <h2 style={{color: "#EC5F55"}}>Documents Checklist</h2>
              {userData.map((user, index) => (
                <div key={index} className="checkBoxDiv">
                  <FormControlLabel control={<Checkbox />} label={user.name} />
                  <Tooltip title={user.note}>
                    <ContactSupportIcon>
                      Default Width [300px]
                    </ContactSupportIcon>
                  </Tooltip>
                </div>
              ))}
            </form>
          </div>
        </div>

        <div className="chartLayout">
          <div className="container-fluid mt-3 mb-3" style={{textAlign: "center"}}>
            <h2 className="text-left" style={{color: "#EC5F55"}}>Users Proportion of Big Four Banks</h2>
            <Chart
            className="chartSize"
              type="donut"
              // width={1200}
              // height={500}
              series={[17, 14, 9, 8.5]}
              options={{
                labels: [
                  "Commonwealth Bank of Australia (CBA)",
                  "Westpac Banking Corporation (WBC)",
                  "National Australia Bank (NBA)",
                  "Australia and NEW Zealand Banking Group (ANZ)",
                ],
                title: {
                  text: "The donut chart below shows the proportion of users' choice between the Four Big Banks in Australia.(in millions)",
                  align: 'center'
                },

                plotOptions: {
                  pie: {
                    donut: {
                      labels: {
                        show: true,
                        total: {
                          show: true,
                         
                          fontSize: 15,
                          color: "#f90000",
                        },
                      },
                    },
                  },
                },

                dataLabels: {
                  enabled: true,
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
