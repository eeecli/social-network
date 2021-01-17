const FOLLOW_TOGGLE = 'FOLLOW-TOGGLE';
const SET_USERS = 'SET-USERS';
const SET_CURRENT_PAGE = 'SET-CURRENT-PAGE';
const SET_USERS_COUNT = 'SET-USERS-COUNT';
const SET_IS_LOADING = 'SET-IS-LOADING';

const initialState = {
  users: [],
  pageSize: 5,
  usersCount: 0,
  currentPage: 1,
  isLoading: false,
};
const usersReduser = (state = initialState, action) => {
  switch (action.type) {
    case FOLLOW_TOGGLE:
      return {
        ...state,
        users: state.users.map((u) => {
          if (u.id === action.userId) return {...u, followed: !u.followed};
          return u;
        }),
      };

    case SET_USERS:
      return {
        ...state,
        users: action.users,
      };
    case SET_CURRENT_PAGE:
      return {
        ...state,
        currentPage: action.currentPage,
      };
    case SET_USERS_COUNT:
      return {
        ...state,
        usersCount: action.usersCount,
      };
    case SET_IS_LOADING:
      return {
        ...state,
        isLoading: action.isLoading,
      };
    default:
      return state;
  }
};

export const toggleFollow = (userId) => ({
  type: FOLLOW_TOGGLE,
  userId,
});

export const setUsers = (users) => ({
  type: SET_USERS,
  users,
});

export const seCurrentPage = (currentPage) => ({
  type: SET_CURRENT_PAGE,
  currentPage,
});
export const setUsersCount = (usersCount) => ({
  type: SET_USERS_COUNT,
  usersCount,
});

export const setIsLoading = (isLoading) => ({
  type: SET_IS_LOADING,
  isLoading,
});

export default usersReduser;
