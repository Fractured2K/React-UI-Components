import React from 'react';
import './Button.css';

const NumberButton = props => <button onClick={props.clickHandler} className={props.buttonStyle}>{props.text}</button>;

export default NumberButton;
