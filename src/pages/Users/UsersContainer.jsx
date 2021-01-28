import React from 'react';
import {connect} from 'react-redux';
import {compose} from 'redux';
import Loader from '../../components/common/Loader/Loader';
import {toggleUserFollow, setFollowingInProgress, requestUsers} from '../../redux/users-reduser';
import {
  getUsers,
  getCurrentPage,
  getFollowingInProgress,
  getIsLoading,
  getPageSize,
  getUsersCount,
} from '../../redux/users-selectors';
import Users from './Users';

class UsersContainer extends React.Component {
  toggleFollow = (userId) => {
    const isUserFollowed = this.props.users.find((item) => item.id === userId).followed;
    this.props.toggleUserFollow(userId, isUserFollowed);
  };

  componentDidMount = () => {
    this.props.requestUsers(this.props.currentPage, this.props.pageSize);
  };

  onPageChanged = (page) => {
    this.props.requestUsers(page, this.props.pageSize);
  };

  render() {
    return (
      <div>
        {this.props.isLoading ? <Loader /> : undefined}
        <Users
          usersCount={this.props.usersCount}
          pageSize={this.props.pageSize}
          users={this.props.users}
          currentPage={this.props.currentPage}
          onPageChanged={this.onPageChanged}
          toggleFollow={this.toggleFollow}
          followingInProgress={this.props.followingInProgress}
        />
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  users: getUsers(state),
  pageSize: getPageSize(state),
  usersCount: getUsersCount(state),
  currentPage: getCurrentPage(state),
  isLoading: getIsLoading(state),
  followingInProgress: getFollowingInProgress(state),
});

export default compose(
  connect(mapStateToProps, {
    toggleUserFollow,
    setFollowingInProgress,
    requestUsers,
  })
)(UsersContainer);
