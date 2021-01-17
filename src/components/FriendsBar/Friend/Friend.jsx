import React from 'react';
import classes from './Friend.module.css';

const Friend = (props) => (
  <div className={classes.friend}>
    <img src={props.icon} alt='user icon' />
  </div>
);

export default Friend;
