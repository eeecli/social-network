import React from 'react';
import {
  sendMessageActionCreator,
  updateNewMessageTextActionCreator,
} from '../../redux/dialogs-reduser';
import Dialogs from './Dialogs';

const DialogsContainer = (props) => {
  let state = props.store.getState().dialogsPage;
  let sendMessage = () => {
    props.store.dispatch(sendMessageActionCreator());
  };

  let updateNewMessageText = (text) => {
    props.store.dispatch(updateNewMessageTextActionCreator(text));
  };

  return (
    <Dialogs
      sendMessage={sendMessage}
      updateNewMessageText={updateNewMessageText}
      dialogsPage={state}
    />
  );
};

export default DialogsContainer;
