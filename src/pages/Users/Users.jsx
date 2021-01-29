import React from 'react';
import User from './User/User';
import classes from './Users.module.css';
import Pagination from '../Pagination/Pagination';

const Users = (props) => {
  const {usersCount, pageSize, currentPage, onPageChanged, users, toggleFollow, followingInProgress} = props;

  return (
    <div>
      <Pagination
        elemCount={usersCount}
        pageSize={pageSize}
        currentPage={currentPage}
        onPageChanged={onPageChanged}
        portionSize='20'
      />
      <div className={classes.usersWrapper}>
        {users.map((u) => (
          <User user={u} toggleFollow={toggleFollow} followingInProgress={followingInProgress} />
        ))}
      </div>
    </div>
  );
};

export default Users;
