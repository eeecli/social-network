import React from 'react'
import User from './User/User'
import classes from './Users.module.css'
import Pagination from '../../components/common/Pagination/Pagination'
import {UserType} from '../../redux/users-reduser'

type PropsType = {
  usersCount: number
  pageSize: number
  currentPage: number
  onPageChanged: (page: number) => void
  users: Array<UserType>
  toggleFollow: (userId: number) => void
  followingInProgress: Array<number>
}

const Users: React.FC<PropsType> = ({ usersCount, pageSize, currentPage, onPageChanged, users, toggleFollow, followingInProgress }) => (
    <div>
      <Pagination
        elemCount={usersCount}
        pageSize={pageSize}
        currentPage={currentPage}
        onPageChanged={onPageChanged}
      />
      <div className={classes.usersWrapper}>
        {users.map((u) => (
          <User user={u} toggleFollow={toggleFollow} followingInProgress={followingInProgress} />
        ))}
      </div>
    </div>
  )

export default Users
