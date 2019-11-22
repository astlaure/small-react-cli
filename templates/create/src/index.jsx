import 'Assets/sass/style.scss';
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom';
import Welcome from 'Routes/welcome';

ReactDOM.render(
  <BrowserRouter>
    <Route path="/" component={Welcome} />
  </BrowserRouter>,
  document.getElementById('root'),
);
