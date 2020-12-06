import React from 'react'
import classes from './MyPosts.module.css'
import Post from './Post/Post'

const MyPosts = () => {
  return (
    <div>
      <div>
        <div className={classes.addPost}>
          <img src="https://upload.wikimedia.org/wikipedia/commons/9/9a/Gull_portrait_ca_usa.jpg"/>
          <textarea></textarea>
          <button>Add Post</button>
        </div>
        <div className={classes.posts}>
          <Post message='I aint sullen, Im lachrymose' likesCount='15'/>
          <Post message='You have to seize life and relish every minute' likesCount='20'/>
        </div>
      </div>
    </div>
  )
}

export default MyPosts;