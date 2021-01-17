import {connect} from 'react-redux';
import {sendMessage, updateNewMessageText} from '../../redux/dialogs-reduser';
import Dialogs from './Dialogs';

const mapStateToProps = (state) => ({
  dialogs: state.dialogsPage.dialogs,
  messages: state.dialogsPage.messages,
  newMessageText: state.dialogsPage.newMessageText,
});

/* const mapDispatchToProps = (dispatch) => {
  return {
    sendMessage: () => {
      dispatch(sendMessageActionCreator());
    },
    updateNewMessageText: (text) => {
      dispatch(updateNewMessageTextActionCreator(text));
    },
  };
}; */

export default connect(mapStateToProps, {sendMessage, updateNewMessageText})(Dialogs);
