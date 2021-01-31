import React from 'react';
import {Field, reduxForm} from 'redux-form';
import classes from './ProfileData.module.css';
import Button from '../../../../components/Button/Button';
import Input from '../../../../components/Input/Input';
import Textarea from '../../../../components/Textarea/Textarea';
import {required} from '../../../../utils/validators/validator';

const ProfileDataForm = (props) => (
  <form className={classes.userInfo} onSubmit={props.handleSubmit}>
    <Field name='fullName' placeholder='full name' component={Input} type='text' validate={[required]} />
    <Field name='aboutMe' placeholder='about me' component={Textarea} type='text' validate={[required]} />
    <Field name='lookingforAJob' type='checkbox' component={Input} label='Looking for a job?' />
    <Field
      name='lookingForAJobDescription'
      placeholder='skills'
      component={Textarea}
      type='text'
      validate={[required]}
    />
    <Field name='contacts.facebook' placeholder='facebook' component={Input} type='text' />
    <Field name='github' placeholder='github' component={Input} type='text' />
    <Field name='instagram' placeholder='instagram' component={Input} type='text' />
    <Field name='mainLink' placeholder='mainLink' component={Input} type='text' />
    <Field name='twitter' placeholder='twitter' component={Input} type='text' />
    <Field name='vk' placeholder='vk' component={Input} type='text' />
    <Field name='website' placeholder='website' component={Input} type='text' />
    <Field name='youtube' placeholder='youtube' component={Input} type='text' />
    {props.error ? <div className='formSubmitError'>{props.error}</div> : undefined}
    <Button buttonText='Save' type='submit' />
  </form>
);

const ProfileDataReduxForm = reduxForm({form: 'editProfile'})(ProfileDataForm);

export default ProfileDataReduxForm;
