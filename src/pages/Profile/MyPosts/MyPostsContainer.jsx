import {connect} from 'react-redux';
import {addPost} from '../../../redux/profile-reduser';
import MyPosts from './MyPosts';

const mapStateToProps = (state) => ({
  posts: state.profilePage.posts,
});

export default connect(mapStateToProps, {addPost})(MyPosts);
