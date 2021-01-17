import axios from 'axios';
import React from 'react';
import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';
import Profile from './Profile';
import {setProfile} from '../../redux/profile-reduser';

class ProfileContainer extends React.Component {
  componentDidMount() {
    axios
      .get(
        `https://social-network.samuraijs.com/api/1.0/profile/${this.props.match.userId ? this.props.match.userId : 2}`
      )
      .then((response) => {
        this.props.setProfile(response.data);
      });
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

export default connect(mapStateToProps, {setProfile})(WithRouterProfileContainer);
