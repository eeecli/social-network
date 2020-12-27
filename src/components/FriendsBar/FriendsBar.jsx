import React from 'react';
import Friend from './Friend/Friend';
import classes from './FriendsBar.module.css';

const FriendsBar = (props) => {
  let friendElements = props.friendsBar.friends.map((f) => (
    <Friend name={f.name} id={f.id} icon={f.icon} />
  ));

  return (
    <div className={classes.gridBar}>
      <div className={classes.friendsBar}>{friendElements}</div>
    </div>
  );
};

export default FriendsBar;
