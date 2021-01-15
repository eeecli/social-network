import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Loader from '../../common/Loader/Loader';

import classes from './ProfileInfo.module.css';

const ProfileInfo = (props) => {
  if (!props.profile) return <Loader />;
  return (
    <div className={classes.aboutWrapper}>
      <div className={classes.avatar}>
        <img src={props.profile.photos.large} />
      </div>
      <div className={classes.userInfo}>
        <div className={classes.fullName}>{props.profile.fullName}</div>
        <div className={classes.description}>{props.profile.aboutMe}</div>
        {props.profile.lookingForAJob === true ? (
          <div className={classes.lookingForAJob}>
            <FontAwesomeIcon icon='briefcase' />
            {props.profile.lookingForAJobDescription}
          </div>
        ) : undefined}
      </div>
    </div>
  );
};

export default ProfileInfo;
