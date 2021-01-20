import React from 'react';
import { NavLink } from 'react-router-dom';

import '../css/Footer.css';
import home from '../assets/home.svg';
import phone from '../assets/phone.svg';
import mail from '../assets/mail.svg';

const Footer = () => (
  <footer>
    <section className="contact">
      <div>
        <img src={home} alt="home" />
        <p>Sneeuwvlerk 18, 8802DB Franeker</p>
      </div>
      <div>
        <img src={phone} alt="phone" />
        <a href="tel:0613540037">06 13 54 00 37</a>
      </div>
      <div>
        <img src={mail} alt="mail" />
        <a href="mailto:bart@bbcoachen.nl?subject=Coach Expeditie">bart@bbcoachen.nl</a>
      </div>
    </section>
    {/* <nav>
      <NavLink to="/privacy">
        Privacyverklaring
      </NavLink>
      &middot;
      <NavLink to="/terms">
        Algemene voorwaarden
      </NavLink>
      &middot;
      <NavLink to="/cookies">
        Cookies
      </NavLink>
    </nav> */}
    <p>&copy; Copyright BB Coachen {new Date().getFullYear()} &middot; Realisatie <a href="https://sjaakluthart.nl" target="_blank" rel="noreferrer">Sjaak Luthart</a></p>
  </footer>
);

export default Footer;
