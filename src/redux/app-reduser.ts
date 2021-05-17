import { getAuthUserData } from './auth-reduser';

const INIT_APP_SUCCESS = 'INIT-APP-SUCCESS';

export type InitialStateType = {
  isAppInit: boolean
};

const initialState: InitialStateType = {
  isAppInit: false
};

const appReduser = (state = initialState, action: any): InitialStateType => {
  switch (action.type) {
    case INIT_APP_SUCCESS:
      return {
        ...state,
        isAppInit: true
      };
    default:
      return state;
  }
};

type InitAppSuccessType = {
  type: typeof INIT_APP_SUCCESS;
};

export const initAppSuccess = (): InitAppSuccessType => ({
  type: INIT_APP_SUCCESS
});

export const initApp = () => (dispatch: any) => {
  const promise = dispatch(getAuthUserData());
  promise.then(() => dispatch(initAppSuccess()));
};

export default appReduser;
