import React from 'react';
import {connect} from 'react-redux';
import {compose} from 'redux';
import Loader from '../../components/common/Loader/Loader';
import {toggleUserFollow, seCurrentPage, setFollowingInProgress, getUsers} from '../../redux/users-reduser';
import Users from './Users';

class UsersContainer extends React.Component {
  toggleFollow = (userId) => {
    const isUserFollowed = this.props.users.find((item) => item.id === userId).followed;
    this.props.toggleUserFollow(userId, isUserFollowed);
  };

  componentDidMount = () => {
    this.props.getUsers(this.props.currentPage, this.props.pageSize);
  };

  onPageChanged = (page) => {
    this.props.seCurrentPage(page);
    this.props.getUsers(page, this.props.pageSize);
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
  users: state.usersPage.users,
  pageSize: state.usersPage.pageSize,
  usersCount: state.usersPage.usersCount,
  currentPage: state.usersPage.currentPage,
  isLoading: state.usersPage.isLoading,
  followingInProgress: state.usersPage.followingInProgress,
});

export default compose(
  connect(mapStateToProps, {
    toggleUserFollow,
    seCurrentPage,
    setFollowingInProgress,
    getUsers,
  })
)(UsersContainer);
