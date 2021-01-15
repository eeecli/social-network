import FriendsBar from './FriendsBar';
import { connect } from 'react-redux';

const mapStateToProps = (state) => {
  return { friendsBar: state.friendsBar };
};

export default connect(mapStateToProps, {})(FriendsBar);
