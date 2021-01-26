import React from 'react';
import Control from '../Control/Control';

const Input = (props) => {
  const {input, meta, child, ...restProps} = props;
  return (
    <Control {...props}>
      <input {...input} {...restProps} />
    </Control>
  );
};
export default Input;
