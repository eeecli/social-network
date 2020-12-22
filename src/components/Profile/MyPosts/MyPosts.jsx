import React from 'react';
import classes from './MyPosts.module.css';
import Post from './Post/Post';
import {
  addPostActionCreator,
  updatePostActionCreator,
} from './../../../redux/profile-reduser';

const MyPosts = (props) => {
  let postsElements = props.posts.map((p) => (
    <Post message={p.message} likesCount={p.likesCount} />
  ));

  let newPostElement = React.createRef();

  let addPost = () => {
    props.dispatch(addPostActionCreator());
  };

  let updatePost = () => {
    let text = newPostElement.current.value;
    props.dispatch(updatePostActionCreator(text));
  };

  return (
    <div>
      <div>
        <div className={classes.addPost}>
          <img src='https://upload.wikimedia.org/wikipedia/commons/9/9a/Gull_portrait_ca_usa.jpg' />
          <div className={classes.textWrapper}>
            <textarea
              ref={newPostElement}
              placeholder='Say Something'
              value={props.newPostText}
              onChange={updatePost}
            ></textarea>
            <button onClick={addPost}>Add Post</button>
          </div>
        </div>
        <div className={classes.posts}>{postsElements}</div>
      </div>
    </div>
  );
};

export default MyPosts;
