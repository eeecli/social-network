import {connect} from 'react-redux';
import {compose} from 'redux';
import {sendMessage, updateNewMessageText} from '../../redux/dialogs-reduser';
import {withAuthRedirect} from '../hoc/withAuthRedirect';
import Dialogs from './Dialogs';

const mapStateToProps = (state) => ({
  dialogs: state.dialogsPage.dialogs,
  messages: state.dialogsPage.messages,
  newMessageText: state.dialogsPage.newMessageText,
});

export default compose(withAuthRedirect, connect(mapStateToProps, {sendMessage, updateNewMessageText}))(Dialogs);
