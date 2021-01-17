import {combineReducers, createStore} from 'redux';
import dialogsReduser from './dialogs-reduser';
import friendsbarReduser from './friendsbar-reduser';
import profileReduser from './profile-reduser';
import usersReduser from './users-reduser';

const redusers = combineReducers({
  dialogsPage: dialogsReduser,
  profilePage: profileReduser,
  friendsBar: friendsbarReduser,
  usersPage: usersReduser,
});

const store = createStore(redusers);

export default store;
