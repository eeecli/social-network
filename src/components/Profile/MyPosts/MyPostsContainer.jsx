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
    addPost: () => {
      dispatch(addPostActionCreator());
    },
    updateNewPostText: (text) => {
      dispatch(updatePostActionCreator(text));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(MyPosts);
