import {connect} from 'react-redux';
import {addPost, updatePost} from '../../../redux/profile-reduser';
import MyPosts from './MyPosts';

const mapStateToProps = (state) => ({
  posts: state.profilePage.posts,
  newPostText: state.profilePage.newPostText,
  updatePost: state.profilePage.updatePost,
});

/* const mapDispatchToProps = (dispatch) => {
  return {
    addPost: () => {
      dispatch(addPostActionCreator());
    },
    updateNewPostText: (text) => {
      dispatch(updatePostActionCreator(text));
    },
  };
}; */

export default connect(mapStateToProps, {addPost, updatePost})(MyPosts);
