import {stopSubmit} from 'redux-form';
import {authAPI, ResultCodeEnum, ResultCodeForCaptchaEnum, securityAPI} from '../api/api';

const SET_USER_AUTH_DATA = 'social-network/auth-reduser/SET-USER-AUTH-DATA';
const SET_CAPTCHA = 'social-network/auth-reduser/SET-CAPTCHA';

const initialState = {
  userId: null as number | null,
  email: null as string | null,
  login: null as string | null,
  isAuth: false,
  captchaURL: null  as string | null,
};

export type InitialStateType = typeof initialState;

const authReduser = (state = initialState, action: any): InitialStateType => {
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

type SetAuthUserDataPayloadType = {
  userId: number | null
  email: string | null
  login: string | null
  isAuth: boolean
};

type SetAuthUserDataType = {
  type: typeof SET_USER_AUTH_DATA
  payload: SetAuthUserDataPayloadType
};

export const setAuthUserData = (
  userId: number | null,
  email: string | null,
  login: string | null,
  isAuth: boolean
): SetAuthUserDataType => ({
  type: SET_USER_AUTH_DATA,
  payload: {userId, email, login, isAuth},
});

type SetCapthaType = {
  type: typeof SET_CAPTCHA
  payload: {captchaURL: string}
};

export const setCaptha = (captchaURL: string): SetCapthaType => ({
  type: SET_CAPTCHA,
  payload: {captchaURL},
});

export const getAuthUserData = () => async (dispatch: any) => {
  const meSata = await authAPI.me();
  if (meSata.resultCode === ResultCodeEnum.Success) {
    const {id, email, login} = meSata.data;
    dispatch(setAuthUserData(id, email, login, true));
  }
};

export const getCaptcha = () => async (dispatch: any) => {
  const response = await securityAPI.getCaptcha();
  dispatch(setCaptha(response.data.url));
};

export const login = (email: string, password: string, rememberMe: boolean = false, captcha: string) => async (
  dispatch: any
) => {
  const loginData = await authAPI.login(email, password, rememberMe, captcha);
  if (loginData.resultCode === ResultCodeEnum.Success) dispatch(getAuthUserData());
  else {
    if (loginData.resultCode === ResultCodeForCaptchaEnum.CaptchaIsRequired) dispatch(getCaptcha());
    dispatch(
      stopSubmit('login', {_error: loginData.messages[0].length > 0 ? loginData.messages[0] : 'Some error'})
    );
  }
};

export const logout = () => async (dispatch: any) => {
  const response = await authAPI.logout();
  if (response.data.resultCode === 0) {
    dispatch(setAuthUserData(null, null, null, false));
  }
};

export default authReduser;
