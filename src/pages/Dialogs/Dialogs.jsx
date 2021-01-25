import React from 'react';
import {Field, reduxForm} from 'redux-form';
import classes from './Dialogs.module.css';
import Message from './Messages/Messages';
import DialogItem from './DialogItem/DialogItem';
import Button from '../../components/Button/Button';

const Dialogs = (props) => {
  const dialogElements = props.dialogs.map((d) => <DialogItem name={d.name} key={d.id} id={d.id} />);

  const messagesElements = props.messages.map((m) => <Message message={m.message} key={m.id} id={m.id} />);

  const onSubmit = (val) => props.sendMessage(val.message);

  return (
    <div className={classes.dialogs}>
      <div className={classes.dialogItems}>{dialogElements}</div>
      <div className={classes.messagesWrapper}>
        <div className={classes.messages}>{messagesElements}</div>
        <div className={classes.newMessage}>
          <DialogsReduxForm onSubmit={onSubmit} />
        </div>
      </div>
    </div>
  );
};

const DialogsForm = (props) => (
  <form onSubmit={props.handleSubmit} className={classes.newMessage}>
    <div>
      <Field name='message' placeholder='Text Message' component='textarea' type='text' />
    </div>
    <div className={classes.sendBtn}>
      <Button type='button' buttonText='Send' />
    </div>
  </form>
);

const DialogsReduxForm = reduxForm({form: 'dialogs'})(DialogsForm);

export default Dialogs;
