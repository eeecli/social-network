import React from 'react';
import classes from './Button.module.css';

const Button = (props) => (
  <button onClick={props.buttonCallback} type='button' className={classes.button}>
    {props.buttonText}
  </button>
);

export default Button;
