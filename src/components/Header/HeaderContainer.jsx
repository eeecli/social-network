import axios from 'axios';
import React from 'react';
import {connect} from 'react-redux';
import Header from './Header';
import {setAuthUserData} from '../../redux/auth-reduser';

class HeaderContainer extends React.Component {
  componentDidMount() {
    axios.get(`https://social-network.samuraijs.com/api/1.0/auth/me`, {withCredentials: true}).then((response) => {
      if (response.data.resultCode === 0) {
        const {id, email, login} = response.data.data;
        this.props.setAuthUserData(id, email, login);
      }
    });
  }

  render() {
    return <Header authData={this.props} />;
  }
}

const mapStateToProps = (state) => ({
  login: state.auth.login,
  isUserAuth: state.auth.isUserAuth,
});

export default connect(mapStateToProps, {setAuthUserData})(HeaderContainer);
