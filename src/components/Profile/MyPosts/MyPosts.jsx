import React from 'react'
import classes from './MyPosts.module.css'
import Post from './Post/Post'

const MyPosts = (props) => {

  let postsElements = props.posts.map(p => <Post message={p.message} likesCount={p.likesCount}/>)

  return (
    <div>
      <div>
        <div className={classes.addPost}>
          <img src="https://upload.wikimedia.org/wikipedia/commons/9/9a/Gull_portrait_ca_usa.jpg"/>
          <textarea></textarea>
          <button>Add Post</button>
        </div>
        <div className={classes.posts}>
          {postsElements}
        </div>
      </div>
    </div>
  )
}

export default MyPosts;