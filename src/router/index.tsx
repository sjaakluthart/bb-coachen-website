import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Header from '../components/Header';
import Footer from '../components/Footer';
import Home from '../components/Home';
import About from '../components/About';
import Expeditions from '../components/Expeditions';

const Router = () => (
  <BrowserRouter>
    <Header />
    <Switch>
      <Route path="/expeditions" component={Expeditions} />
      <Route path="/about" component={About} />
      <Route path="/" component={Home} />
    </Switch>
    <Footer />
  </BrowserRouter>
);

export default Router;
