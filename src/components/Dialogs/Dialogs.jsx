import React from 'react';
import classes from './Dialogs.module.css';
import Message from './Messages/Messages';
import DialogItem from './DialogItem/DialogItem';

const Dialogs = (props) => {
  const dialogElements = props.dialogs.map((d) => <DialogItem name={d.name} key={d.id} id={d.id} />);

  const messagesElements = props.messages.map((m) => <Message message={m.message} key={m.id} id={m.id} />);

  const sendMessage = () => {
    props.sendMessage();
  };

  const updateNewMessageText = (e) => {
    props.updateNewMessageText(e.target.value);
  };

  return (
    <div className={classes.dialogs}>
      <div className={classes.dialogItems}>{dialogElements}</div>
      <div className={classes.messagesWrapper}>
        <div className={classes.messages}>{messagesElements}</div>
        <div className={classes.newMessage}>
          <textarea placeholder='Text Message' onChange={updateNewMessageText} value={props.newMessageText} />
          <button onClick={sendMessage} type='button'>
            Send
          </button>
        </div>
      </div>
    </div>
  );
};

export default Dialogs;
