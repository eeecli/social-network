import React from 'react';
import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';
import Profile from './Profile';
import {setProfile, getProfile} from '../../redux/profile-reduser';

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

const WithRouterProfileContainer = withRouter(ProfileContainer);

export default connect(mapStateToProps, {setProfile, getProfile})(WithRouterProfileContainer);
