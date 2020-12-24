import React from 'react';
import {
  addPostActionCreator,
  updatePostActionCreator,
} from './../../../redux/profile-reduser';
import MyPosts from './MyPosts';

const MyPostsContainer = (props) => {
  let state = props.store.getState();

  let addPost = () => {
    props.store.dispatch(addPostActionCreator());
  };

  let updatePost = (text) => {
    props.store.dispatch(updatePostActionCreator(text));
  };

  return (
    <MyPosts
      updateNewPostText={updatePost}
      addPost={addPost}
      posts={state.profilePage.posts}
      newPostText={state.profilePage.newPostText}
    />
  );
};

export default MyPostsContainer;
