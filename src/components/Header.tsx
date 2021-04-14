import React from 'react';
import { NavLink } from 'react-router-dom';

import '../css/Header.css';
import logo from '../assets/logo.svg';

const Header = () => (
  <header className="app-header">
    <section>
      <NavLink to="/" exact>
        <img src={logo} alt="BB Coachen" />
      </NavLink>
      <nav>
        <NavLink to="/about" exact>
          Wie is BB
        </NavLink>
        {/* <NavLink to="/expeditions" exact>
          Expedities
        </NavLink> */}
        <a href="mailto:bart@bbcoachen.nl?subject=Coach Expeditie" className="sign-up">Maak een afspraak</a>
      </nav>
    </section>
  </header>
);

export default Header;
