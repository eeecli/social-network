import React from 'react';
import Loader from '../../common/Loader/Loader';
import classes from './ProfileInfo.module.css';
import userPic from '../../../assets/images/userpic.png';

const ProfileInfo = (props) => {
  if (!props.profile) return <Loader />;
  const setLinks = Object.values(props.profile.contacts)
    .filter((contact) => contact)
    .map((key) => (
      <a href={key} key={key}>
        {key}
      </a>
    ));

  return (
    <div className={classes.aboutWrapper}>
      <div className={classes.avatar}>
        <img src={props.profile.photos.large || userPic} alt='profile' />
      </div>
      <div className={classes.userInfo}>
        <div className={classes.fullName}>{props.profile.fullName}</div>
        <div className={classes.description}>{props.profile.aboutMe}</div>
        {props.profile.lookingForAJob === true ? (
          <div className={classes.lookingForAJob}>{props.profile.lookingForAJobDescription}</div>
        ) : undefined}
        {setLinks}
      </div>
    </div>
  );
};

export default ProfileInfo;
