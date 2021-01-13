const FOLLOW_TOGGLE = 'FOLLOW-TOGGLE';
const SET_USERS = 'SET-USERS';

let initialState = { users: [] };
const usersReduser = (state = initialState, action) => {
  switch (action.type) {
    case FOLLOW_TOGGLE:
      return {
        ...state,
        users: state.users.map((u) => {
          debugger;
          if (u.id === action.id) return { ...u, followed: !u.followed };
          return u;
        }),
      };

    case SET_USERS:
      return {
        ...state,
        users: [...state.users, ...action.users],
      };
    default:
      return state;
  }
};

export const followActionCreator = (userId) => ({
  type: FOLLOW_TOGGLE,
  id: userId,
});

export const setUSersActionCreator = (users) => ({
  type: SET_USERS,
  users: users,
});

export default usersReduser;
