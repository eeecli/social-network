import {applyMiddleware, combineReducers, createStore} from 'redux';
import thunk from 'redux-thunk';
import {reducer as formReduser} from 'redux-form';
import dialogsReduser from './dialogs-reduser';
import friendsbarReduser from './friendsbar-reduser';
import profileReduser from './profile-reduser';
import usersReduser from './users-reduser';
import authReduser from './auth-reduser';
import appReduser from './app-reduser';
import paginationReduser from './pagination-reduser';

const redusers = combineReducers({
  dialogsPage: dialogsReduser,
  profilePage: profileReduser,
  friendsBar: friendsbarReduser,
  usersPage: usersReduser,
  auth: authReduser,
  form: formReduser,
  app: appReduser,
  pagination: paginationReduser,
});

const store = createStore(redusers, applyMiddleware(thunk));

export default store;
