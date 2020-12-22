import React from 'react';
import classes from './Friend.module.css';

const Friend = (props) => {
  return (
    <div className={classes.friend}>
      <img src={props.icon} />
    </div>
  );
};

export default Friend;
