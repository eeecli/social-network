import React from 'react';
import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';
import {compose} from 'redux';
import Profile from './Profile';
import {getProfile, getStatus} from '../../redux/profile-reduser';
import {withAuthRedirect} from '../../components/hoc/withAuthRedirect';

class ProfileContainer extends React.Component {
  componentDidMount() {
    this.props.getProfile(this.props.match.params.userId);
    this.props.getStatus(this.props.match.params.userId);
  }

  render() {
    return (
      <div>
        <Profile profile={this.props.profile} status={this.props.status} />
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  profile: state.profilePage.profile,
  status: state.profilePage.status,
});

export default compose(
  withAuthRedirect,
  withRouter,
  connect(mapStateToProps, {getProfile, getStatus})
)(ProfileContainer);
