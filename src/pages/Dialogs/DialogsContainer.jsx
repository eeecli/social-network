import {connect} from 'react-redux';
import {compose} from 'redux';
import {sendMessage} from '../../redux/dialogs-reduser';
import {withAuthRedirect} from '../../components/hoc/withAuthRedirect';
import Dialogs from './Dialogs';

const mapStateToProps = (state) => ({
  dialogs: state.dialogsPage.dialogs,
  messages: state.dialogsPage.messages,
  isAuth: state.auth.isAuth,
});

export default compose(withAuthRedirect, connect(mapStateToProps, {sendMessage}))(Dialogs);
