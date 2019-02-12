import React from 'react';
import './App.css';

import CalculatorDisplay from './components/DisplayComponents/CalculatorDisplay';

const App = () => {
  return (
    <div className="container">
      <div className="calc-container">
        <CalculatorDisplay />
      </div>
    </div>
  );
};

export default App;
