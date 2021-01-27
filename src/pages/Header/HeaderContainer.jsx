import React from 'react';
import {connect} from 'react-redux';
import Header from './Header';
import {getAuthUserData, logout} from '../../redux/auth-reduser';

class HeaderContainer extends React.Component {
  componentDidMount() {
    this.props.getAuthUserData();
  }

  render() {
    return <Header authData={this.props} />;
  }
}

const mapStateToProps = (state) => ({
  login: state.auth.login,
  isAuth: state.auth.isAuth,
});

export default connect(mapStateToProps, {getAuthUserData, logout})(HeaderContainer);
