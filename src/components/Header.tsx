import React from 'react';
import { NavLink } from 'react-router-dom';

import '../css/Header.css';
import logo from '../assets/logo.svg';

const Header = () => (
  <header className="app-header">
    <img src={logo} alt="BB Coachen" />
    <nav>
      <NavLink to="/" exact>
        Home
      </NavLink>
      <NavLink to="/about" exact>
        Wie is BB
      </NavLink>
      <NavLink to="/sign-up" exact>
        Meld je aan
      </NavLink>
    </nav>
  </header>
);

export default Header;
