import {stopSubmit} from 'redux-form';
import {authAPI, securityAPI} from '../api/api';

const SET_USER_AUTH_DATA = 'social-network/auth-reduser/SET-USER-AUTH-DATA';
const SET_CAPTCHA = 'social-network/auth-reduser/SET-CAPTCHA';

const initialState = {
  userId: null,
  email: null,
  login: null,
  isAuth: false,
  captchaURL: null,
};
const authReduser = (state = initialState, action) => {
  switch (action.type) {
    case SET_USER_AUTH_DATA:
    case SET_CAPTCHA:
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

export const setCaptha = (captchaURL) => ({
  type: SET_CAPTCHA,
  payload: {captchaURL},
});

export const getAuthUserData = () => async (dispatch) => {
  const response = await authAPI.me();
  if (response.data.resultCode === 0) {
    const {id, email, login} = response.data.data;
    dispatch(setAuthUserData(id, email, login, true));
  }
};

export const getCaptcha = () => async (dispatch) => {
  const response = await securityAPI.getCaptcha();
  dispatch(setCaptha(response.data.url));
};

export const login = (email, password, rememberMe = false, captcha) => async (dispatch) => {
  const response = await authAPI.login(email, password, rememberMe, captcha);
  if (response.data.resultCode === 0) dispatch(getAuthUserData());
  else {
    if (response.data.resultCode === 10) dispatch(getCaptcha());
    dispatch(
      stopSubmit('login', {_error: response.data.messages[0].length > 0 ? response.data.messages[0] : 'Some error'})
    );
  }
};

export const logout = () => async (dispatch) => {
  const response = await authAPI.logout();
  if (response.data.resultCode === 0) {
    dispatch(setAuthUserData(null, null, null, false));
  }
};

export default authReduser;
