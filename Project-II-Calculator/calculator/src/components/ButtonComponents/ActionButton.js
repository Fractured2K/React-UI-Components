import React from 'react';
import './Button.css';

const ActionButton = props => <button onClick={props.clickHandler} className={props.actionStyle}>{props.text}</button>


export default ActionButton;
