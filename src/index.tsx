import React from 'react';
import { hydrate, render } from 'react-dom';
// import 'slick-carousel/slick/slick.css';
// import 'slick-carousel/slick/slick-theme.css';
import '@fontsource/bebas-neue';
import '@fontsource/poppins';
import '@fontsource/poppins/500.css';

import './css/MeyerReset.css';
import './css/index.css';
import Router from './router';
import reportWebVitals from './reportWebVitals';

const rootElement = document.getElementById('root');

const app = (
  <React.StrictMode>
    <Router />
  </React.StrictMode>
);

if (rootElement && rootElement.hasChildNodes()) {
  hydrate(app, rootElement);
} else {
  render(app, rootElement);
}

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
