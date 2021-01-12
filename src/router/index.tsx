import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Header from '../components/Header';
import Home from '../components/Home';
import About from '../components/About';

const Router = () => (
  <BrowserRouter>
    <Header />
    <Switch>
      <Route path="/about" component={About} />
      <Route path="/" component={Home} />
    </Switch>
  </BrowserRouter>
);

export default Router;
