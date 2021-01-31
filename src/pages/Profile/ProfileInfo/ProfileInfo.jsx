import React, {useState} from 'react';
import classes from './ProfileInfo.module.css';
import userPic from '../../../assets/images/userpic.png';
import Loader from '../../../components/common/Loader/Loader';
import ProfileData from './ProfileData/ProfileData';
import ProfileStatus from './ProfileStatus';
import ProfileDataReduxForm from './ProfileData/ProfileDataForm';

const ProfileInfo = (props) => {
  if (!props.profile) return <Loader />;

  const onPutNewPhoto = (e) => {
    if (e.target.files.length) props.putPhoto(e.target.files[0]);
  };

  const [editMode, setEditMode] = useState(false);

  const toggleEditMode = () => {
    setEditMode(!editMode);
  };

  const onSubmit = (val) => {
    props.saveProfileInfo(val).then(() => toggleEditMode());
  };

  return (
    <div className={classes.aboutWrapper}>
      <div className={classes.avatar}>
        <img src={props.profile.photos.large || userPic} alt='profile' />
        {props.isOwner && (
          <label htmlFor='upload' className={classes.uploadPhoto}>
            <input type='file' id='upload' onChange={onPutNewPhoto} />
            <span aria-hidden='true' className='icon-pencil' />
          </label>
        )}
      </div>
      <div className={classes.userInfo}>
        <ProfileStatus status={props.status} updateStatus={props.updateStatus} isOwner={props.isOwner} />
        {editMode ? (
          <ProfileDataReduxForm onSubmit={onSubmit} initialValues={props.profile} />
        ) : (
          <ProfileData
            profile={props.profile}
            status={props.status}
            updateStatus={props.updateStatus}
            isOwner={props.isOwner}
            editProfile={toggleEditMode}
          />
        )}
      </div>
    </div>
  );
};

export default ProfileInfo;
