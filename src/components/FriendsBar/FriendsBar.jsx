import React from 'react'
import Friend from './Friend/Friend'
import classes from './FriendsBar.module.css'


const FriendsBar = () => {
  return (
    <div className={classes.gridBar}>
      <div className={classes.friendsBar}>
        <Friend/> 
        <Friend/> 
        <Friend/> 
      </div>
    </div>
  )
}

export default FriendsBar;