import React from 'react';
import {Field, reduxForm} from 'redux-form';
import Button from '../../components/Button/Button';

const Login = () => {
  const onSubmit = (val) => console.log(val);

  return (
    <div>
      <h1>Login</h1>
      <LoginReduxForm onSubmit={onSubmit} />
    </div>
  );
};

const LoginForm = (props) => (
  <form onSubmit={props.handleSubmit}>
    <div>
      <Field name='login' placeholder='Login' component='input' type='text' />
    </div>
    <div>
      <Field name='password' placeholder='Password' component='input' type='text' />
    </div>
    <div>
      <Field name='rememberme' type='checkbox' component='input' /> Remember me
    </div>
    <div>
      <Button buttonText='Login' type='submit' />
    </div>
  </form>
);

const LoginReduxForm = reduxForm({form: 'login'})(LoginForm);

export default Login;
