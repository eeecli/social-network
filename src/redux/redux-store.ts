import { applyMiddleware, combineReducers, createStore } from 'redux';
import thunk from 'redux-thunk';
import { reducer as formReduser } from 'redux-form';
import dialogsReduser from './dialogs-reduser';
import friendsbarReduser from './friendsbar-reduser';
import profileReduser from './profile-reduser';
import usersReduser from './users-reduser';
import authReduser from './auth-reduser';
import appReduser from './app-reduser';
import paginationReduser from './pagination-reduser';

const rootReduser = combineReducers({
  dialogsPage: dialogsReduser,
  profilePage: profileReduser,
  friendsBar: friendsbarReduser,
  usersPage: usersReduser,
  auth: authReduser,
  form: formReduser,
  app: appReduser,
  pagination: paginationReduser,
});

type RootReduserType = typeof rootReduser;
export type AppStateType = ReturnType<RootReduserType>;

const store = createStore(rootReduser, applyMiddleware(thunk));

export default store;
