import classes from './Dialogs.module.css';
import React from 'react';
import Message from './Messages/Messages';
import DialogItem from './DialogItem/DialogItem';
import {
  sendMessageActionCreator,
  updateNewMessageTextActionCreator,
} from './../../redux/dialogs-reduser';

const Dialogs = (props) => {
  debugger;
  let dialogElements = props.dialogsPage.dialogs.map((d) => (
    <DialogItem name={d.name} id={d.id} />
  ));
  let messagesElements = props.dialogsPage.messages.map((m) => (
    <Message message={m.message} id={m.id} />
  ));

  let sendMessage = () => {
    props.dispatch(sendMessageActionCreator());
  };

  let updateNewMessageText = (e) => {
    let text = e.target.value;
    props.dispatch(updateNewMessageTextActionCreator(text));
  };

  return (
    <div className={classes.dialogs}>
      <div className={classes.dialogItems}>{dialogElements}</div>
      <div className={classes.messages}>
        {messagesElements}
        <div className={classes.newMessage}>
          <textarea
            placeholder='Text Message'
            onChange={updateNewMessageText}
            value={props.newMessageText}
          ></textarea>
          <button onClick={sendMessage}>Send</button>
        </div>
      </div>
    </div>
  );
};

export default Dialogs;
