import React from 'react';
import {NavLink} from 'react-router-dom';
import classes from './User.module.css';
import userPic from '../../../assets/images/userpic.png';

const User = (props) => {
  const {id, photos, status, followed, name} = props.user;
  const {toggleFollow, followingInProgress} = props;
  const location = {country: 'Russia', city: 'Moskow'};

  return (
    <div className={classes.userWrapper}>
      <div className={classes.user}>
        <div className={classes.userIcon}>
          <NavLink to={`/profile/${id}`}>
            <img src={photos.small || userPic} alt='user icon' />
          </NavLink>
        </div>
        <div className={classes.userInfo}>
          <div className={classes.headerInfo}>
            <div className={classes.userName}>{name}</div>
            <div className={classes.userLocation} />
            {location.country}, {location.city}
          </div>
          <div className={classes.userStatus}>{status || 'Empty status'}</div>
          <button
            className={classes.follow}
            onClick={() => toggleFollow(id)}
            type='button'
            disabled={followingInProgress.some((userid) => userid === id)}>
            {followed === true ? 'Unfollow' : 'Follow'}
          </button>
        </div>
      </div>
    </div>
  );
};

export default User;
