import { combineReducers, createStore } from 'redux';
import dialogsReduser from './dialogs-reduser';
import friendsbarReduser from './friendsbar-reduser';
import profileReduser from './profile-reduser';

let redusers = combineReducers({
  dialogsPage: dialogsReduser,
  profilePage: profileReduser,
  friendsBar: friendsbarReduser,
});

let store = createStore(redusers);

export default store;
