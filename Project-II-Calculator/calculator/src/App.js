import React from 'react';
import './reset.css';
import './App.css';

import CalculatorDisplay from './components/DisplayComponents/CalculatorDisplay';
import ButtonContainer from './components/ButtonComponents/ButtonContainer';
import ActionButton from './components/ButtonComponents/ActionButton';
import NumberButton from './components/ButtonComponents/NumberButton';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      total: 5
    };

    this.handleClear = this.handleClear.bind(this);


  }

  handleClear(e) {
    this.setState({ total: 0 })
  }

  render() {
    return (
      <div className="container">
        <div className="calc-container">
          <CalculatorDisplay total={this.state.total} />
          <ButtonContainer>
            <ActionButton clickHandler={this.handleClear} text="clear" actionStyle="action-style" />
            <NumberButton buttonStyle="btn-style-red" text="÷" />
          </ButtonContainer>
          <ButtonContainer>
            <NumberButton buttonStyle="btn-style" text="7" />
            <NumberButton buttonStyle="btn-style" text="8" />
            <NumberButton buttonStyle="btn-style" text="9" />
            <NumberButton buttonStyle="btn-style-red" text="x" />
          </ButtonContainer>
          <ButtonContainer>
            <NumberButton buttonStyle="btn-style" text="7" />
            <NumberButton buttonStyle="btn-style" text="8" />
            <NumberButton buttonStyle="btn-style" text="9" />
            <NumberButton buttonStyle="btn-style-red" text="-" />
          </ButtonContainer>
          <ButtonContainer>
            <NumberButton buttonStyle="btn-style" text="3" />
            <NumberButton buttonStyle="btn-style" text="2" />
            <NumberButton buttonStyle="btn-style" text="1" />
            <NumberButton buttonStyle="btn-style-red" text="+" />
          </ButtonContainer>
          <ButtonContainer>
            <ActionButton text="0" actionStyle="action-style" />
            <NumberButton buttonStyle="btn-style-red" text="=" />
          </ButtonContainer>
        </div>
      </div>
    );
  };
}

export default App;
