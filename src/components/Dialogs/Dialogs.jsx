import classes from './Dialogs.module.css';
import React from 'react';
import Message from './Messages/Messages';
import DialogItem from './DialogItem/DialogItem';

const Dialogs = (props) => {
  let dialogElements = props.dialogsPage.dialogs.map((d) => (
    <DialogItem name={d.name} id={d.id} />
  ));
  let messagesElements = props.dialogsPage.messages.map((m) => (
    <Message message={m.message} id={m.id} />
  ));

  let sendMessageElement = React.createRef();

  let sendMessage = () => {
    props.addMessage(sendMessageElement.current.value);
  };

  let updateNewMessageText = () => {
    props.updateNewMessageText(sendMessageElement.current.value);
  };

  return (
    <div className={classes.dialogs}>
      <div className={classes.dialogItems}>{dialogElements}</div>
      <div className={classes.messages}>
        {messagesElements}
        <div className={classes.newMessage}>
          <textarea
            ref={sendMessageElement}
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
