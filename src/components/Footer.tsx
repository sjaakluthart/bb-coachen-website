import React from 'react';
import { NavLink } from 'react-router-dom';

import '../css/Footer.css';

const Footer = () => (
  <footer>
    <nav>
      <NavLink to="/contact">
        Contact
      </NavLink>
      &middot;
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
    </nav>
    <p>&copy; Copyright BB Coachen {new Date().getFullYear()} &middot; Realisatie <a href="https://sjaakluthart.nl" target="_blank" rel="noreferrer">Sjaak Luthart</a></p>
  </footer>
);

export default Footer;
