import {
  sendMessageActionCreator,
  updateNewMessageTextActionCreator,
} from '../../redux/dialogs-reduser';
import Dialogs from './Dialogs';
import { connect } from 'react-redux';

const mapStateToProps = (state) => {
  return {
    dialogs: state.dialogsPage.dialogs,
    messages: state.dialogsPage.messages,
    newMessageText: state.dialogsPage.newMessageText,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    sendMessage: () => {
      dispatch(sendMessageActionCreator());
    },
    updateNewMessageText: (text) => {
      dispatch(updateNewMessageTextActionCreator(text));
    },
  };
};

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs);

export default DialogsContainer;
