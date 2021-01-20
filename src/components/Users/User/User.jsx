import React from 'react';
import {NavLink} from 'react-router-dom';
import classes from './User.module.css';

const User = (props) => (
  <div className={classes.userWrapper}>
    <div className={classes.user}>
      <div className={classes.userIcon}>
        <NavLink to={`/profile/${props.id}`}>
          <img src={props.icon} alt='user icon' />
        </NavLink>
      </div>
      <div className={classes.userInfo}>
        <div className={classes.headerInfo}>
          <div className={classes.userName}>{props.fullName}</div>
          <div className={classes.userLocation} />
          {props.location.country} {props.location.city}
        </div>
        <div className={classes.userStatus}>{props.status || 'Empty status'}</div>
        <button
          className={classes.follow}
          onClick={() => props.toggleFollow(props.id)}
          type='button'
          disabled={props.followingInProgress.some((id) => id === props.id)}>
          {props.followed === true ? 'Unfollow' : 'Follow'}
        </button>
      </div>
    </div>
  </div>
);

export default User;
