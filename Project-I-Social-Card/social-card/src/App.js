import React from 'react';
import './App.css';

import HeaderContainer from './components/HeaderComponents/HeaderContainer';
import CardContainer from './components/CardComponents/CardContainer';

const App = () => {
  return (
    <div className="container">
      <div className="content">
        <HeaderContainer />
        <CardContainer />
      </div>
    </div>
  );
};

export default App;
