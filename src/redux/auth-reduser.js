import {stopSubmit} from 'redux-form';
import {authAPI} from '../api/api';

const SET_USER_AUTH_DATA = 'social-network/auth-reduser/SET-USER-AUTH-DATA';

const initialState = {
  userId: null,
  email: null,
  login: null,
  isAuth: false,
};
const authReduser = (state = initialState, action) => {
  switch (action.type) {
    case SET_USER_AUTH_DATA:
      return {
        ...state,
        ...action.payload,
      };
    default:
      return state;
  }
};

export const setAuthUserData = (userId, email, login, isAuth) => ({
  type: SET_USER_AUTH_DATA,
  payload: {userId, email, login, isAuth},
});

export const getAuthUserData = () => async (dispatch) => {
  const response = await authAPI.me();
  if (response.data.resultCode === 0) {
    const {id, email, login} = response.data.data;
    dispatch(setAuthUserData(id, email, login, true));
  }
};

export const login = (email, password, rememberMe = false) => async (dispatch) => {
  const response = await authAPI.login(email, password, rememberMe);
  if (response.data.resultCode === 0) dispatch(getAuthUserData());
  else dispatch(stopSubmit('login', {_error: response.messages[0].length > 0 ? response.messages[0] : 'Some error'}));
};

export const logout = () => async (dispatch) => {
  const response = await authAPI.logout();
  if (response.data.resultCode === 0) {
    dispatch(setAuthUserData(null, null, null, false));
  }
};

export default authReduser;
