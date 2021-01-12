import React from 'react';
import { NavLink } from 'react-router-dom';

import '../css/Header.css';

const Header = () => (
  <header className="app-header">
    <h1>BB Coachen</h1>
    <nav>
      <NavLink to="/" exact>
        Home
      </NavLink>
      <NavLink to="/about" exact>
        Wie is BB
      </NavLink>
      <NavLink to="/expeditions" exact>
        Expedities
      </NavLink>
      <NavLink to="/sign-up" exact>
        Meld je aan
      </NavLink>
    </nav>
  </header>
);

export default Header;
