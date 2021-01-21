import {authAPI} from '../api/api';

const SET_USER_AUTH_DATA = 'SET-USER-AUTH-DATA';

const initialState = {
  userId: null,
  email: null,
  login: null,
  isUserAuth: false,
};
const authReduser = (state = initialState, action) => {
  switch (action.type) {
    case SET_USER_AUTH_DATA:
      return {
        ...state,
        ...action.data,
        isUserAuth: true,
      };
    default:
      return state;
  }
};

export const setAuthUserData = (userId, email, login) => ({
  type: SET_USER_AUTH_DATA,
  data: {userId, email, login},
});

export const getAuthUserData = () => (dispatch) => {
  authAPI.me().then((response) => {
    if (response.resultCode === 0) {
      const {id, email, login} = response.data;
      dispatch(setAuthUserData(id, email, login));
    }
  });
};

export default authReduser;
