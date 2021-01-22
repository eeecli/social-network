import React from 'react';
import MyPostsContainer from './MyPosts/MyPostsContainer';
import classes from './Profile.module.css';
import ProfileInfo from './ProfileInfo/ProfileInfo';

const Profile = (props) => (
  <div className={classes.profileWrapper}>
    <ProfileInfo profile={props.profile} status={props.status} />
    <MyPostsContainer />
  </div>
);

export default Profile;
