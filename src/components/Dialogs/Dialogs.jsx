import classes from './Dialogs.module.css';
import React from 'react';
import Message from './Messages/Messages';
import DialogItem from './DialogItem/DialogItem';

const Dialogs = (props) => {
  let dialogElements = props.dialogs.map((d) => (
    <DialogItem name={d.name} id={d.id} />
  ));

  let messagesElements = props.messages.map((m) => (
    <Message message={m.message} id={m.id} />
  ));

  let sendMessage = () => {
    props.sendMessage();
  };

  let updateNewMessageText = (e) => {
    props.updateNewMessageText(e.target.value);
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
