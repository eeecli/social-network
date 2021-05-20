import React from 'react';
import {connect} from 'react-redux';
import {compose} from 'redux';
import Loader from '../../components/common/Loader/Loader';
import {toggleUserFollow, requestUsers, UserType} from '../../redux/users-reduser';
import {setCurrentPage} from '../../redux/pagination-reduser';
import {
  getUsers,
  getCurrentPage,
  getFollowingInProgress,
  getIsLoading,
  getPageSize,
  getUsersCount,
} from '../../redux/users-selectors';
import Users from './Users';
import { AppStateType } from '../../redux/redux-store';

type MapStatePropsType = {
  pageSize: number
  currentPage: number
  isLoading: boolean
  usersCount: number
  users: Array<UserType>
  followingInProgress: Array<number>
}

type MapDispatchPropsType = {
  requestUsers: (currentPage: number, pageSize: number) => void
  toggleUserFollow: (userId: number, isUserFollowed: boolean) => void
  setCurrentPage: (page: number) => void
}

type OwnPropsType = {

}

type PropsType = MapStatePropsType & MapDispatchPropsType & OwnPropsType

class UsersContainer extends React.Component<PropsType> {
  toggleFollow = (userId: number) => {
    const isUserFollowed = this.props.users.find((item) => item.id === userId)?.followed;
    this.props.toggleUserFollow(userId, isUserFollowed || false);
  };

  componentDidMount = () => {
    this.props.requestUsers(this.props.currentPage, this.props.pageSize);
  };

  onPageChanged = (page: number) => {
    this.props.requestUsers(page, this.props.pageSize);
    this.props.setCurrentPage(page);
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

const mapStateToProps = (state: AppStateType): MapStatePropsType => ({
  users: getUsers(state),
  pageSize: getPageSize(state),
  usersCount: getUsersCount(state),
  currentPage: getCurrentPage(state),
  isLoading: getIsLoading(state),
  followingInProgress: getFollowingInProgress(state),
});

export default compose(
  connect<MapStatePropsType, MapDispatchPropsType, OwnPropsType, AppStateType>(mapStateToProps, {
    toggleUserFollow,
    requestUsers,
    setCurrentPage,
  })
)(UsersContainer);
