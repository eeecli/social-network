import React from 'react';
import User from './User/User';
import classes from './Users.module.css';

let Users = (props) => {
  let usersElements = props.users.map((u) => (
    <User
      id={u.id}
      fullName={u.fullName}
      status={u.status}
      icon={u.icon}
      location={u.location}
      followed={u.followed}
      key={u.id}
      toggleFollow={props.toggleFollow}
    />
  ));

  return <div className={classes.usersWrapper}>{usersElements}</div>;
};

export default Users;
