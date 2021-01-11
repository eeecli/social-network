import {
  followActionCreator,
  setUSersActionCreator,
} from '../../redux/users-reduser';
import Users from './Users';
import { connect } from 'react-redux';

let mapStateToProps = (state) => {
  return { users: state.usersPage.users };
};

let mapDispatchToProps = (dispatch) => {
  return {
    toggleFollow: (userId) => {
      dispatch(followActionCreator(userId));
    },
    setUsers: (users) => {
      dispatch(setUSersActionCreator(users));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Users);
