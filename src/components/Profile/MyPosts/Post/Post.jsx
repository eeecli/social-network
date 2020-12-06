import React from 'react'
import classes from './Post.module.css'

const Post = (props) => {
  return (
    <div>
      <div className={classes.item}>
        <div>
          <img src="https://cdn.jpegmini.com/user/images/slider_puffin_before_mobile.jpg" />
          {props.message}
        </div>
        <span>likes {props.likesCount}</span>
      </div>
    </div>
  )
}

export default Post;