import React from 'react';
import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';
import {compose} from 'redux';
import Profile from './Profile';
import {getProfile, getStatus, updateStatus} from '../../redux/profile-reduser';
import {withAuthRedirect} from '../../components/hoc/withAuthRedirect';

class ProfileContainer extends React.Component {
  componentDidMount() {
    const userId = this.props.match.params.userId || this.props.authUserId;
    this.props.getProfile(userId);
    this.props.getStatus(userId);
  }

  render() {
    return (
      <div>
        <Profile profile={this.props.profile} status={this.props.status} updateStatus={this.props.updateStatus} />
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  profile: state.profilePage.profile,
  status: state.profilePage.status,
  isAuth: state.auth.isAuth,
  authUserId: state.auth.userId,
});

export default compose(
  withRouter,
  withAuthRedirect,
  connect(mapStateToProps, {getProfile, getStatus, updateStatus})
)(ProfileContainer);