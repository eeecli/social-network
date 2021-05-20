import {usersAPI} from '../api/api';
import { PhotosType } from '../types/types';

const FOLLOW_TOGGLE = 'social-network/users-reduser/FOLLOW-TOGGLE';
const SET_USERS = 'social-network/users-reduser/SET-USERS';
const SET_IS_LOADING = 'social-network/users-reduser/SET-IS-LOADING';
const SET_FOLLOWING_IN_PROGRESS = 'social-network/users-reduser/SET-FOLLOWING-IN-PROGRESS';
const SET_USERS_COUNT = 'social-network/users-reduser/SET-USERS-COUNT';

export type UserType = {
  id: number
  name: string
  status: string | null
  photos: PhotosType
  followed: boolean
}

export type InitialStateType = {
  users: Array<UserType>
  usersCount: number
  isLoading: boolean
  followingInProgress: Array<number>
}

const initialState: InitialStateType = {
  users: [],
  usersCount: 0,
  isLoading: false,
  followingInProgress: [],
};
const usersReduser = (state = initialState, action: any): InitialStateType => {
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

type ToggleFollowType = {
  type: typeof FOLLOW_TOGGLE
  userId: number
}

export const toggleFollow = (userId: number): ToggleFollowType => ({
  type: FOLLOW_TOGGLE,
  userId,
});

type SetUsersType = {
  type: typeof SET_USERS
  users: number
}

export const setUsers = (users: number): SetUsersType => ({
  type: SET_USERS,
  users,
});

type SetUsersCountType = {
  type: typeof SET_USERS_COUNT
  usersCount: number
}

export const setUsersCount = (usersCount: number): SetUsersCountType => ({
  type: SET_USERS_COUNT,
  usersCount,
});

type SetIsLoadingType = {
  type: typeof SET_IS_LOADING
  isLoading: boolean
}

export const setIsLoading = (isLoading: boolean): SetIsLoadingType => ({
  type: SET_IS_LOADING,
  isLoading,
});

type SetFollowingInProgressType = {
  type: typeof SET_FOLLOWING_IN_PROGRESS
  isInProgres: boolean
  userId: number
}

export const setFollowingInProgress = (isInProgres: boolean, userId: number): SetFollowingInProgressType => ({
  type: SET_FOLLOWING_IN_PROGRESS,
  isInProgres,
  userId,
});

export const requestUsers = (page: number, pageSize: number) => async (dispatch: any) => {
  dispatch(setIsLoading(true));
  const response = await usersAPI.getUsers(page, pageSize);
  dispatch(setUsers(response.data.items));
  dispatch(setUsersCount(response.data.totalCount));
  dispatch(setIsLoading(false));
};

export const toggleUserFollow = (userId:number, isUserFollowed: boolean) => async (dispatch: any) => {
  dispatch(setIsLoading(true));
  dispatch(setFollowingInProgress(true, userId));
  const response = await usersAPI.toggleFollow(userId, isUserFollowed);
  if (response.data.resultCode === 0) dispatch(toggleFollow(userId));
  dispatch(setIsLoading(false));
  dispatch(setFollowingInProgress(false, userId));
};

export default usersReduser;
