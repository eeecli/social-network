import React from 'react';
import classes from './ProfileData.module.css';
import Contact from '../Contact/Contact';
import Button from '../../../../components/Button/Button';

const ProfileData = ({profile, isOwner, editProfile}) => {
  const setLinks = Object.keys(profile.contacts).map((key) =>
    profile.contacts[key] ? <Contact contact={key} link={profile.contacts[key]} /> : undefined
  );

  return (
    <div>
      <div className={classes.fullNameWrapper}>
        <div className={classes.fullName}>{profile.fullName}</div>
        {isOwner && <Button buttonText='Edit' onClick={editProfile} />}
      </div>
      <div className={classes.description}>{profile.aboutMe}</div>
      {profile.lookingForAJob === true ? profile.lookingForAJob : undefined}
      {profile.lookingForAJobDescription}
      {setLinks}
    </div>
  );
};

export default ProfileData;
