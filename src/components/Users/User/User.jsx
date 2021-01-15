import React from 'react';
import { NavLink } from 'react-router-dom';
import classes from './User.module.css';

let User = (props) => {
  return (
    <div className={classes.userWrapper}>
      <div className={classes.user}>
        <div className={classes.userIcon}>
          <NavLink to={'/profile/' + props.id}>
            <img src={props.icon} />
          </NavLink>
        </div>
        <div className={classes.userInfo}>
          <div className={classes.headerInfo}>
            <div className={classes.userName}>{props.fullName}</div>
            <div className={classes.userLocation}></div>
            {props.location.country}, {props.location.city}
          </div>
          <div className={classes.userStatus}>
            {props.status || 'Empty status'}
          </div>
          {props.followed ? (
            <button
              className={classes.follow}
              onClick={() => props.toggleFollow(props.id)}
            >
              Unfollow
            </button>
          ) : (
            <button
              className={classes.follow}
              onClick={() => props.toggleFollow(props.id)}
            >
              Follow
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default User;
