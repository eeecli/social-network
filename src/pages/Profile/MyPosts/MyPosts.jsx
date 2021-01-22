import React from 'react';
import Button from '../../../components/Button/Button';
import Textarea from '../../../components/Textarea/Textarea';
import classes from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = (props) => {
  const postsElements = props.posts.map((p) => <Post message={p.message} likesCount={p.likesCount} key={p.id} />);

  const addPost = () => {
    props.addPost();
  };

  const updatePost = (e) => {
    props.updatePost(e.target.value);
  };

  return (
    <div className={classes.postsWrapper}>
      <div className={classes.addPost}>
        <img src='https://upload.wikimedia.org/wikipedia/commons/9/9a/Gull_portrait_ca_usa.jpg' alt='profile icon' />
        <div className={classes.addPostWrapper}>
          <Textarea placeholder='Say Something' value={props.newPostText} textCallback={updatePost} />
          <div className={classes.sendBtn}>
            <Button buttonCallback={addPost} type='button' buttonText='Add Post' />
          </div>
        </div>
      </div>
      <div className={classes.posts}>{postsElements}</div>
    </div>
  );
};

export default MyPosts;
