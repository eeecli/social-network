import React from 'react';
import classes from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = (props) => {
  const postsElements = props.posts.map((p) => <Post message={p.message} likesCount={p.likesCount} key={p.id} />);

  const newPostElement = React.createRef();

  const addPost = () => {
    props.addPost();
  };

  const updatePost = () => {
    props.updatePost(newPostElement.current.value);
  };

  return (
    <div className={classes.postsWrapper}>
      <div className={classes.addPost}>
        <img src='https://upload.wikimedia.org/wikipedia/commons/9/9a/Gull_portrait_ca_usa.jpg' alt='profile icon' />
        <div className={classes.textWrapper}>
          <textarea ref={newPostElement} placeholder='Say Something' value={props.newPostText} onChange={updatePost} />
          <button onClick={addPost} type='button'>
            Add Post
          </button>
        </div>
      </div>
      <div className={classes.posts}>{postsElements}</div>
    </div>
  );
};

export default MyPosts;
