import {getAuthUserData} from './auth-reduser';

const INIT_APP_SUCCESS = 'INIT-APP-SUCCESS';

const initialState = {
  isAppInit: false,
};
const appReduser = (state = initialState, action) => {
  switch (action.type) {
    case INIT_APP_SUCCESS:
      return {
        ...state,
        isAppInit: true,
      };
    default:
      return state;
  }
};

export const initAppSuccess = () => ({
  type: INIT_APP_SUCCESS,
});

export const initApp = () => (dispatch) => {
  const promise = dispatch(getAuthUserData());
  promise.then(() => dispatch(initAppSuccess()));
};

export default appReduser;
