import {
  followActionCreator,
  setUSersActionCreator,
  seCurrentPageActionCreator,
  setUsersCountActionCreator,
  setIsLoadingActionCreator,
} from '../../redux/users-reduser';
import Users from './Users';
import { connect } from 'react-redux';
import axios from 'axios';
import React from 'react';
import Loader from '../common/Loader/Loader';

class UsersContainer extends React.Component {
  getUsersPage = (page) => {
    this.props.setIsLoading(true);
    axios
      .get(
        `https://social-network.samuraijs.com/api/1.0/users?page=${page}&count=${this.props.pageSize}`
      )
      .then((response) => {
        this.props.setIsLoading(false);
        this.props.setUsers(response.data.items);
        this.props.setUsersCount(response.data.totalCount);
      });
  };

  componentDidMount = () => {
    this.getUsersPage(this.props.currentPage);
  };

  onPageChanged = (page) => {
    this.props.seCurrentPage(page);
    this.getUsersPage(page);
  };

  render() {
    return (
      <div>
        {this.props.isLoading && <Loader />}

        <Users
          usersCount={this.props.usersCount}
          pageSize={this.props.pageSize}
          users={this.props.users}
          currentPage={this.props.currentPage}
          onPageChanged={this.onPageChanged}
          toggleFollow={this.props.toggleFollow}
        />
      </div>
    );
  }
}

let mapStateToProps = (state) => {
  return {
    users: state.usersPage.users,
    pageSize: state.usersPage.pageSize,
    usersCount: state.usersPage.usersCount,
    currentPage: state.usersPage.currentPage,
    isLoading: state.usersPage.isLoading,
  };
};

let mapDispatchToProps = (dispatch) => {
  return {
    toggleFollow: (userId) => {
      dispatch(followActionCreator(userId));
    },
    setUsers: (users) => {
      dispatch(setUSersActionCreator(users));
    },
    seCurrentPage: (page) => {
      dispatch(seCurrentPageActionCreator(page));
    },
    setUsersCount: (usersCount) => {
      dispatch(setUsersCountActionCreator(usersCount));
    },
    setIsLoading: (isLoading) => {
      dispatch(setIsLoadingActionCreator(isLoading));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(UsersContainer);
