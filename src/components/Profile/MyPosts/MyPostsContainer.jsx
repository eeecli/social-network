import {
  addPostActionCreator,
  updatePostActionCreator,
} from './../../../redux/profile-reduser';
import MyPosts from './MyPosts';
import { connect } from 'react-redux';

const mapStateToProps = (state) => {
  return {
    posts: state.profilePage.posts,
    newPostText: state.profilePage.newPostText,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    updateNewPostText: () => {
      dispatch(addPostActionCreator());
    },
    addPost: (text) => {
      dispatch(updatePostActionCreator(text));
    },
  };
};

const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts);

export default MyPostsContainer;
