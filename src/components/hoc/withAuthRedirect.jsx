import React from 'react';
import {connect} from 'react-redux';
import {Redirect} from 'react-router-dom';

const mapStateToProps = (state) => ({
  isAuth: state.auth.isAuth,
});

export const withAuthRedirect = (Component) => {
  // eslint-disable-next-line react/jsx-props-no-spreading
  const RedirectComponent = (props) => (props.isAuth ? <Component {...props} /> : <Redirect to='/login' />);

  return connect(mapStateToProps)(RedirectComponent);
};
