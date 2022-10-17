import React from "react";
import "./Footer.css";

function Footer() {
  return (
    <div className="main-footer">
      <div className="container">
        <div className="row">
          <p className="col-sm" style={{textAlign: "center"}}>
            &copy;{new Date().getFullYear()} VICISH | All rights reserved
          </p>
        </div>
      </div>
    </div>
  );
}

export default Footer;