import React from 'react';
import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';
import {compose} from 'redux';
import Profile from './Profile';
import {getProfile} from '../../redux/profile-reduser';
import {withAuthRedirect} from '../hoc/withAuthRedirect';

class ProfileContainer extends React.Component {
  componentDidMount() {
    this.props.getProfile(this.props.match.params.userId);
  }

  render() {
    return (
      <div>
        <Profile profile={this.props.profile} />
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  profile: state.profilePage.profile,
});

export default compose(withAuthRedirect, withRouter, connect(mapStateToProps, {getProfile}))(ProfileContainer);
