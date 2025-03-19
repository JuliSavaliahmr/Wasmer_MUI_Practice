import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import Home from './views/Home';

import './assets/styles/Style.css';


const App = () => {
  return (
    <BrowserRouter>
        <Home />
    </BrowserRouter>
  );
}

export default App;
