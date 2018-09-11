import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import './global-styles';

import Header from './Header';
import Container from './Container';

render(
  <BrowserRouter>
    <div>
      <Header />
      <Container />
    </div>
  </BrowserRouter>,
  document.getElementById('root')
);
