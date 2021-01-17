import {connect} from 'react-redux';
import FriendsBar from './FriendsBar';

const mapStateToProps = (state) => ({friendsBar: state.friendsBar});

export default connect(mapStateToProps, {})(FriendsBar);
