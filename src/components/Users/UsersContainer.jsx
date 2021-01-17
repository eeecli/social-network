import React from 'react';
import {connect} from 'react-redux';
import axios from 'axios';
import {toggleFollow, setUsers, seCurrentPage, setUsersCount, setIsLoading} from '../../redux/users-reduser';
import Users from './Users';
import Loader from '../common/Loader/Loader';

class UsersContainer extends React.Component {
  getUsersPage = (page) => {
    this.props.setIsLoading(true);
    axios
      .get(`https://social-network.samuraijs.com/api/1.0/users?page=${page}&count=${this.props.pageSize}`)
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
        {this.props.isLoading ? <Loader /> : undefined}

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

const mapStateToProps = (state) => ({
  users: state.usersPage.users,
  pageSize: state.usersPage.pageSize,
  usersCount: state.usersPage.usersCount,
  currentPage: state.usersPage.currentPage,
  isLoading: state.usersPage.isLoading,
});

export default connect(mapStateToProps, {
  toggleFollow,
  setUsers,
  seCurrentPage,
  setUsersCount,
  setIsLoading,
})(UsersContainer);
