import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Home from './Pages/Home';
import './Styles/Style.css';
const App = () => {
  return (
    <BrowserRouter>
      <div>
        <Home />
      </div>
    </BrowserRouter>
  );
}

export default App;
