import React from 'react';
import Control from '../Control/Control';

const Textarea = (props) => {
  const {input, meta, child, ...restProps} = props;
  return (
    <Control {...props}>
      <textarea {...input} {...restProps} />
    </Control>
  );
};

export default Textarea;
