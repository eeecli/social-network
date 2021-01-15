import React from 'react';
import User from './User/User';
import classes from './Users.module.css';
import userPic from '../../assets/images/userpic.png';

let Users = (props) => {
  let pages = [];
  let pagesCount = Math.ceil(props.usersCount / props.pageSize);
  for (let i = 1; i <= pagesCount; i++) pages.push(i);

  return (
    <div>
      <div className={classes.pagination}>
        {pages.map((p) => {
          return (
            <span
              onClick={() => {
                props.onPageChanged(p);
              }}
              className={
                props.currentPage === p ? classes.currentPage : undefined
              }
            >
              {p}
            </span>
          );
        })}
      </div>
      <div className={classes.usersWrapper}>
        {props.users.map((u) => (
          <User
            id={u.id}
            fullName={u.name}
            status={u.status}
            icon={u.photos.small || userPic}
            location={'u.location'}
            followed={u.followed}
            key={u.id}
            toggleFollow={props.toggleFollow}
          />
        ))}
      </div>
    </div>
  );
};

export default Users;
