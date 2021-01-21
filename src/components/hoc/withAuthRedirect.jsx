import React from 'react';
import {connect} from 'react-redux';
import {Redirect} from 'react-router-dom';

const mapStateToProps = (state) => ({
  isAuth: state.auth.isUserAuth,
});

export const withAuthRedirect = (Component) => {
  const RedirectComponent = (props) => (props.isAuth ? <Component props={props} /> : <Redirect to='/login' />);

  return connect(mapStateToProps)(RedirectComponent);
};
