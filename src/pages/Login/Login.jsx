import React from 'react';
import {connect} from 'react-redux';
import {Field, reduxForm} from 'redux-form';
import {Redirect} from 'react-router-dom';
import Button from '../../components/Button/Button';
import Input from '../../components/Input/Input';
import {required, validateEmail} from '../../utils/validators/validator';
import {login} from '../../redux/auth-reduser';
import classes from './Login.module.css';

const Login = (props) => {
  const onSubmit = (val) => {
    props.login(val.email, val.password, val.rememberme);
  };

  if (props.isAuth) return <Redirect to='/profile' />;

  return (
    <div className={classes.loginWrapper}>
      <h1>Login</h1>
      <LoginReduxForm onSubmit={onSubmit} />
    </div>
  );
};

const LoginForm = (props) => (
  <form onSubmit={props.handleSubmit} className={classes.loginFormWrapper}>
    <div>
      <Field name='email' placeholder='Email' component={Input} type='text' validate={[required, validateEmail]} />
    </div>
    <div>
      <Field name='password' placeholder='Password' component={Input} type='password' validate={[required]} />
    </div>
    <div>
      <Field name='rememberme' type='checkbox' component={Input} label='rememberme' />
    </div>
    {props.error ? <div className={classes.formSubmitError}>{props.error}</div> : undefined}
    <div>
      <Button buttonText='Login' type='submit' />
    </div>
  </form>
);

const mapStateToProps = (state) => ({
  isAuth: state.auth.isAuth,
});

const LoginReduxForm = reduxForm({form: 'login'})(LoginForm);

export default connect(mapStateToProps, {login})(Login);
