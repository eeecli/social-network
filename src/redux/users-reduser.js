import {usersAPI} from '../api/api';

const FOLLOW_TOGGLE = 'FOLLOW-TOGGLE';
const SET_USERS = 'SET-USERS';
const SET_CURRENT_PAGE = 'SET-CURRENT-PAGE';
const SET_USERS_COUNT = 'SET-USERS-COUNT';
const SET_IS_LOADING = 'SET-IS-LOADING';
const SET_FOLLOWING_IN_PROGRESS = 'SET-FOLLOWING-IN-PROGRESS';

const initialState = {
  users: [],
  pageSize: 5,
  usersCount: 0,
  currentPage: 1,
  isLoading: false,
  followingInProgress: [],
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
    case SET_FOLLOWING_IN_PROGRESS:
      return {
        ...state,
        followingInProgress: action.isInProgres
          ? [...state.followingInProgress, action.userId]
          : state.followingInProgress.filter((id) => id !== action.userId),
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

export const setFollowingInProgress = (isInProgres, userId) => ({
  type: SET_FOLLOWING_IN_PROGRESS,
  isInProgres,
  userId,
});

export const requestUsers = (page, pageSize) => (dispatch) => {
  dispatch(setIsLoading(true));
  dispatch(seCurrentPage(page));
  usersAPI.getUsers(page, pageSize).then((response) => {
    dispatch(setUsers(response.items));
    dispatch(setUsersCount(response.totalCount));
  });
  dispatch(setIsLoading(false));
};

export const toggleUserFollow = (userId, isUserFollowed) => (dispatch) => {
  dispatch(setIsLoading(true));
  dispatch(setFollowingInProgress(true, userId));
  usersAPI.toggleFollow(userId, isUserFollowed).then((response) => {
    if (response.resultCode === 0) dispatch(toggleFollow(userId));
  });
  dispatch(setIsLoading(false));
  dispatch(setFollowingInProgress(false, userId));
};

export default usersReduser;
