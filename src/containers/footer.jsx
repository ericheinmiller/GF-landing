import React from 'react';
import Facebook from '../images/facebook.svg';
import Twitter from '../images/Shape.svg';

export default () => (
  <div className="footer">
    <div className="footer-upper-container">
      <div className="footer-upper-section flex-grow-1">
        <h4>
          Resources
        </h4>
        <p>
          Blog
        </p>
        <p>
          FAQ
        </p>
      </div>
      <div className="footer-upper-section flex-grow-1">
        <h4>
          Careers
        </h4>
        <p>
          Production Engineer
        </p>
        <p>
          Sales Rep
        </p>
      </div>
      <div className="footer-upper-section footer-upper-section--normal flex-grow-2">
        <h4>
          Corporate
        </h4>
        <p>
          290-291 Mu 4, Latkrabang
        </p>
        <p>
          Industrial Estate, Chalongkrug Rd
        </p>
        <p>
          Lamprathew, Latkrabang, Bangkok, 10520, Thailand
        </p>
      </div>
      <div className="footer-upper-section footer-upper-section--icons flex-grow-2">
        <div className="spacing" />
        <img src={Facebook} alt="Facebook Icon" />
        <img src={Twitter} alt="Twitter Icon" />
        <img src={Facebook} alt="Facebook Icon" />
        <img src={Twitter} alt="Twitter Icon" />
        <img src={Facebook} alt="Facebook Icon" />
      </div>
    </div>
    <div className="footer-lower-container">
      <div className="footer-lower-section">
        Goldfine Manufacturining Platform &copy; 2019
      </div>
      <div className="footer-lower-section">
        <p>
          <i className="material-icons">local_phone</i>
          (408) 660 9990
        </p>
        <p>
          <i className="material-icons">local_printshop</i>
          (408) 660 9990 | (408) 660 9990
        </p>
        <p>
          <i className="material-icons">email</i>
          sales@goldfinemfg.com
        </p>
      </div>
    </div>
  </div>
);

