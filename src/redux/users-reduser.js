import {usersAPI} from '../api/api';

const FOLLOW_TOGGLE = 'social-network/users-reduser/FOLLOW-TOGGLE';
const SET_USERS = 'social-network/users-reduser/SET-USERS';
const SET_IS_LOADING = 'social-network/users-reduser/SET-IS-LOADING';
const SET_FOLLOWING_IN_PROGRESS = 'social-network/users-reduser/SET-FOLLOWING-IN-PROGRESS';
const SET_USERS_COUNT = 'social-network/users-reduser/SET-USERS-COUNT';

const initialState = {
  users: [],
  usersCount: 0,
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

export const requestUsers = (page, pageSize) => async (dispatch) => {
  dispatch(setIsLoading(true));
  const response = await usersAPI.getUsers(page, pageSize);
  dispatch(setUsers(response.data.items));
  dispatch(setUsersCount(response.data.totalCount));
  dispatch(setIsLoading(false));
};

export const toggleUserFollow = (userId, isUserFollowed) => async (dispatch) => {
  dispatch(setIsLoading(true));
  dispatch(setFollowingInProgress(true, userId));
  const response = await usersAPI.toggleFollow(userId, isUserFollowed);
  if (response.data.resultCode === 0) dispatch(toggleFollow(userId));
  dispatch(setIsLoading(false));
  dispatch(setFollowingInProgress(false, userId));
};

export default usersReduser;
