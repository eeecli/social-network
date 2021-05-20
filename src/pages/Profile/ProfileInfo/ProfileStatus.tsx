import React, {useState, useEffect, ChangeEvent} from 'react';
import classes from './ProfileInfo.module.css';

type PropsType = {
  status: string
  isOwner: boolean
  updateStatus: (status: string) => void
}

const ProfileStatus: React.FC<PropsType> = ({status, isOwner, updateStatus}) => {
  const [editMode, setEditMode] = useState(false);
  const [localStatus, setStatus] = useState(status);

  useEffect(() => {
    setStatus(status);
  }, [status]);

  const toggleEditMode = () => {
    if (!isOwner) return;
    if (editMode) updateStatus(localStatus);
    setEditMode(!editMode);
  };

  const onStatusChange = (e: ChangeEvent<HTMLInputElement>) => setStatus(e.target.value);

  return (
    <div className={classes.status}>
      {editMode ? (
        <input onBlur={toggleEditMode} value={localStatus} maxLength={300} onChange={onStatusChange} />
      ) : (
        <span onDoubleClick={toggleEditMode}>{localStatus || 'Empty status'}</span>
      )}
    </div>
  );
};

export default ProfileStatus;
