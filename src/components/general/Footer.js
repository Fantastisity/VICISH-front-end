import React from 'react';

import './Footer.css';

function Footer () {

  return (
    <section className="footer">
      <hr className="footer-seperator" />
      <section className="footer-info">
        <section className="footer-info-left">
          <section className="footer-info__name">
              {/* TA16 */}
          </section>
          <section className="footer-info__returns">
            {/* 123-456-789 */}
            <br />
            {/* Melbourne, Australia */}
            <br />
            {/* Monash University */}
          </section>        
        </section>
        <section className="footer-info-center">
          <section className="footer-info__email">
            {/* contact.info@gmail.com */}
          </section>
          <section className="footer-info__terms">
            Terms and Conditions
            <br />
            Copyright
          </section>
        </section>
        <section className="footer-info-right">
          <section className="footer-info__number">
            {/* Team Memebers */}
          </section>
          <section className="footer-info__contact">
            {/* Our Story */}
            <br />
            {/* Contact Us */}
          </section>
        </section>
      </section>
      <hr className="footer-seperator" />
    </section>
  )

}

export default Footer;