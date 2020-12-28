import FriendsBar from './FriendsBar';
import { connect } from 'react-redux';

const mapStateToProps = (state) => {
  return { friendsBar: state.friendsBar };
};

const mapDispatchToProps = (dispatch) => {
  return {};
};

const FriendsBarContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(FriendsBar);

export default FriendsBarContainer;