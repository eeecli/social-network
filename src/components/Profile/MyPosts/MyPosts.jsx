import React from 'react';
import classes from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = (props) => {
  let postsElements = props.posts.map((p) => (
    <Post message={p.message} likesCount={p.likesCount} />
  ));

  let newPostElement = React.createRef();

  let addPost = () => {
    props.addPost(newPostElement.current.value);
  };

  let updateValue = () => {
    props.updateNewPostText(newPostElement.current.value);
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
              onChange={updateValue}
            >
              {props.newPostText}
            </textarea>
            <button onClick={addPost}>Add Post</button>
          </div>
        </div>
        <div className={classes.posts}>{postsElements}</div>
      </div>
    </div>
  );
};

export default MyPosts;
