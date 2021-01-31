import React from 'react';
import Control from '../Control/Control';

const Input = (props) => {
  const {input, meta, child, label, ...restProps} = props;
  return (
    <Control {...props}>
      <input {...input} {...restProps} /> {label ? <span>{label}</span> : undefined}
    </Control>
  );
};
export default Input;
