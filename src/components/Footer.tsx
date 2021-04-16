import React from 'react';
// import { NavLink } from 'react-router-dom';

import '../css/Footer.css';
import home from '../assets/home.svg';
import phone from '../assets/phone.svg';
import mail from '../assets/mail.svg';
import facebook from '../assets/facebook.svg';
import instagram from '../assets/instagram.svg';
import linkedin from '../assets/linkedin.svg';

const Footer = () => (
  <footer>
    <section className="contact">
      <a href="https://goo.gl/maps/8TbRsz5t7V4P7SBV6" target="_blank" rel="noreferrer">
        <img src={home} alt="home" />
        <span>Sneeuwvlerk 18, 8802DB Franeker</span>
      </a>
      <a href="tel:0613540037">
        <img src={phone} alt="phone" />
        <span>06 13 54 00 37</span>
      </a>
      <a href="mailto:bart@bbcoachen.nl?subject=Coach Expeditie">
        <img src={mail} alt="mail" />
        <span>bart@bbcoachen.nl</span>
      </a>
    </section>
    <section className="contact">
      <a href="https://www.facebook.com/bbcoachen" target="_blank" rel="noreferrer">
        <img src={facebook} alt="facebook" />
      </a>
      <a href="https://www.instagram.com/bbcoachen" target="_blank" rel="noreferrer">
        <img src={instagram} alt="instagram" />
      </a>
      <a href="https://www.linkedin.com/company/gewooncoach/" target="_blank" rel="noreferrer">
        <img src={linkedin} alt="linkedin" />
      </a>
    </section>
    <p>&copy; Copyright BB Coachen {new Date().getFullYear()} &middot; Realisatie <a href="https://sjaakluthart.nl" target="_blank" rel="noreferrer">Sjaak Luthart</a></p>
  </footer>
);

export default Footer;
