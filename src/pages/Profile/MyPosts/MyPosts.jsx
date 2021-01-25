import React from 'react';
import {Field, reduxForm} from 'redux-form';
import Button from '../../../components/Button/Button';
import classes from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = (props) => {
  const postsElements = props.posts.map((p) => <Post message={p.message} likesCount={p.likesCount} key={p.id} />);

  const onSubmit = (val) => {
    props.addPost(val.post);
  };

  return (
    <div className={classes.postsWrapper}>
      <div className={classes.addPost}>
        <img src='https://upload.wikimedia.org/wikipedia/commons/9/9a/Gull_portrait_ca_usa.jpg' alt='profile icon' />
        <div className={classes.addPostWrapper}>
          <MyPostsReduxForm onSubmit={onSubmit} />
        </div>
      </div>
      <div className={classes.posts}>{postsElements}</div>
    </div>
  );
};

const MyPostsForm = (props) => (
  <form onSubmit={props.handleSubmit}>
    <div>
      <Field name='post' placeholder='Say Something' component='textarea' type='text' />
    </div>
    <div className={classes.sendBtn}>
      <Button type='button' buttonText='Send' />
    </div>
  </form>
);

const MyPostsReduxForm = reduxForm({form: 'dialogs'})(MyPostsForm);

export default MyPosts;
