import React from 'react';
import classes from './Button.module.css';

const Button = ({type, buttonText, ...restProps}) => (
  <button {...restProps} type={type ? 'submit' : 'button'} className={classes.button}>
    {buttonText}
  </button>
);

export default Button;
