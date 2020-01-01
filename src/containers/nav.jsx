import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import Goldfine from '../images/Goldfine.svg';
import Waves from '../images/top-waves.svg';

const Nav = () => {
  const [navStatus, setNavStatus] = useState('nav');

  const handleScroll = () => {
    console.log('tracking scrolling');
    console.log(window.pageYOffset);
    if (window.pageYOffset > 100) {
      console.log('triggered');
      setNavStatus('nav--small');
    } else if (window.pageYOffset <= 100) {
      setNavStatus('nav');
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => { window.addEventListener('scroll', handleScroll); };
  }, []);

  return (
    <nav className={navStatus}>
      <img src={Waves} alt="waves" className="image-waves" />
      <img src={Goldfine} alt="logo" className="image-goldfine" />
        <Link className="nav-link" data-selected="true" to="/">About Us</Link>
        <Link className="nav-link" data-selected="false" to="/product">Our Products</Link>
        <Link className="nav-link" data-selected="false" to="/events">Events</Link>
        <Link className="nav-link" data-seleected="false" to="/services">Services</Link>
      <Link className="nav-link nav-link--careers" to="/careers">Careers</Link>
      <Link className="nav-link nav-link--contact" to="/contact">Contact Us</Link>
    </nav>
  );
};
export default connect(null)(Nav);
