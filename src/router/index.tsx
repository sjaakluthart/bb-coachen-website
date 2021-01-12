import React from 'react';
import { HashRouter, Route, Switch } from 'react-router-dom';

import Header from '../components/Header';
import Footer from '../components/Footer';
import Home from '../components/Home';
import About from '../components/About';

const Router = () => (
  <HashRouter>
    <Header />
    <Switch>
      <Route path="/about" component={About} />
      <Route path="/" component={Home} />
    </Switch>
    <Footer />
  </HashRouter>
);

export default Router;
