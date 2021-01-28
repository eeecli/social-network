import React, {useState, useEffect} from 'react';
import classes from './ProfileInfo.module.css';

const ProfileStatus = (props) => {
  const [editMode, setEditMode] = useState(false);
  const [status, setStatus] = useState(props.status);

  useEffect(() => {
    setStatus(props.status);
  }, [props.status]);

  const toggleEditMode = () => {
    if (editMode) props.updateStatus(status);
    setEditMode(!editMode);
  };

  const onStatusChange = (e) => setStatus(e.target.value);

  return (
    <div className={classes.status}>
      {editMode ? (
        <input onBlur={toggleEditMode} value={status} maxLength={300} onChange={onStatusChange} />
      ) : (
        <span onDoubleClick={toggleEditMode}>{status || 'Empty status'}</span>
      )}
    </div>
  );
};

export default ProfileStatus;
