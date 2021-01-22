import React from 'react';
import classes from './Textarea.module.css';

const Textarea = (props) => (
  <textarea
    placeholder={props.placeholder}
    value={props.value}
    onChange={props.textCallback}
    className={classes.textWrapper}
  />
);

export default Textarea;
