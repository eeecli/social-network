import {applyMiddleware, combineReducers, createStore} from 'redux';
import thunk from 'redux-thunk';
import dialogsReduser from './dialogs-reduser';
import friendsbarReduser from './friendsbar-reduser';
import profileReduser from './profile-reduser';
import usersReduser from './users-reduser';
import authReduser from './auth-reduser';

const redusers = combineReducers({
  dialogsPage: dialogsReduser,
  profilePage: profileReduser,
  friendsBar: friendsbarReduser,
  usersPage: usersReduser,
  auth: authReduser,
});

const store = createStore(redusers, applyMiddleware(thunk));

export default store;
