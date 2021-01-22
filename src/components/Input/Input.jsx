import React from 'react';
import classes from './Input.module.css';

const Input = (props) => <input className={classes.inputText} value={props.value} onBlur={props.onBlurCB} />;

export default Input;
