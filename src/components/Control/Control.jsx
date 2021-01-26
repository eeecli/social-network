import React from 'react';
import classes from '../Controls.module.css';

const Control = ({input, meta, ...props}) => {
  const hasError = meta.touched && meta.error;
  return (
    <div className={hasError && classes.error}>
      {props.children}
      {hasError && <span>{meta.error}</span>}
    </div>
  );
};

export default Control;
