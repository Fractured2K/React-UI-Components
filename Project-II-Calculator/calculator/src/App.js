import React from 'react';
import './reset.css';
import './App.css';

import CalculatorDisplay from './components/DisplayComponents/CalculatorDisplay';
import ButtonContainer from './components/ButtonComponents/ButtonContainer';
import ActionButton from './components/ButtonComponents/ActionButton';
import NumberButton from './components/ButtonComponents/NumberButton';

const App = () => {
  return (
    <div className="container">
      <div className="calc-container">
        <CalculatorDisplay />
        <ButtonContainer>
          <ActionButton text="clear" actionStyle="action-style" />
          <NumberButton text="/" />
        </ButtonContainer>
        <ButtonContainer>
          <NumberButton text="7" />
          <NumberButton text="8" />
          <NumberButton text="9" />
          <NumberButton text="X" />
        </ButtonContainer>
        <ButtonContainer>
          <NumberButton text="3" />
          <NumberButton text="2" />
          <NumberButton text="1" />
          <NumberButton text="+" />
        </ButtonContainer>
        <ButtonContainer>
          <ActionButton text="0" actionStyle="action-style" />
          <NumberButton text="=" />
        </ButtonContainer>

      </div>
    </div>
  );
};

export default App;
