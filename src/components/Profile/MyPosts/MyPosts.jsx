import React from 'react';
import classes from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = (props) => {
  let postsElements = props.posts.map((p) => (
    <Post message={p.message} likesCount={p.likesCount} />
  ));

  let newPostElement = React.createRef();

  let addPost = () => {
    props.dispatch({ type: 'ADD-POST' });
  };

  let updateValue = () => {
    props.dispatch({
      type: 'UPDATE-NEW-POST-TEXT',
      newText: newPostElement.current.value,
    });
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
