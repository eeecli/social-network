import {stopSubmit} from 'redux-form';
import {profileAPI} from '../api/api';
import { PhotosType, ProfileType } from '../types/types';

const ADD_POST = 'social-network/profile-reduser/ADD-POST';
const SET_USER_PROFILE = 'social-network/profile-reduser/SET-USER-PROFILE';
const SET_USER_STATUS = 'social-network/profile-reduser/SET-USER-STATUS';
const DELETE_POST = 'social-network/profile-reduser/DELETE-POST';
const GET_PHOTO = 'social-network/profile-reduser/GET-PHOTO';

type PostType = {
  id: number
  message: string
  likesCount: number
};

export type InitialState = {
  posts: Array<PostType>
  profile: ProfileType | null
  status: string | null
};

const initialState = {
  posts: [
    {id: 1, message: 'I aint sullen, Im lachrymose', likesCount: 15},
    {
      id: 2,
      message: 'You have to seize life and relish every minute',
      likesCount: 20,
    },
  ],
  profile: null as ProfileType | null,
  status: null,
};

const profileReduser = (state = initialState, action: any): InitialState => {
  switch (action.type) {
    case ADD_POST:
      return {
        ...state,
        posts: [...state.posts, {id: 5, message: action.post, likesCount: 0}],
      };
    case SET_USER_PROFILE:
      return {...state, profile: action.profile};
    case SET_USER_STATUS:
      return {...state, status: action.status};
    case DELETE_POST:
      return {...state, posts: state.posts.filter((p) => p.id !== action.id)};
    case GET_PHOTO:
      return {...state, profile: {...state.profile, photos: action.photos} as ProfileType};
    default:
      return state;
  }
};

type AddPostType = {
  type: typeof ADD_POST
  post: PostType
};

export const addPost = (post: PostType): AddPostType => ({
  type: ADD_POST,
  post
});

type SetProfileType = {
  type: typeof SET_USER_PROFILE,
  profile: ProfileType
};

export const setProfile = (profile: ProfileType): SetProfileType => ({
  type: SET_USER_PROFILE,
  profile,
});

type SetStatusType = {
  type: typeof SET_USER_STATUS
  status: string
};

export const setStatus = (status: string): SetStatusType => ({
  type: SET_USER_STATUS,
  status,
});

type DeletePostType = {
  type: typeof DELETE_POST
  id: number
};

export const deletePost = (id: number): DeletePostType => ({
  type: DELETE_POST,
  id,
});

type GetPhotoType = {
  type: typeof GET_PHOTO
  photos: PhotosType
};

export const getPhoto = (photos: PhotosType): GetPhotoType => ({
  type: GET_PHOTO,
  photos,
});

export const getProfile = (userId: number) => async (dispatch: any) => {
  const response = await profileAPI.getProfile(userId);
  dispatch(setProfile(response.data));
};

export const getStatus = (userId: number) => async (dispatch: any) => {
  const response = await profileAPI.getStatus(userId);
  dispatch(setStatus(response.data));
};

export const updateStatus = (status: string) => async (dispatch: any) => {
  const response = await profileAPI.updateStatus(status);
  if (response.data.resultCode === 0) dispatch(setStatus(status));
};

export const putPhoto = (photos: PhotosType) => async (dispatch: any) => {
  const response = await profileAPI.putPhoto(photos);
  if (response.data.resultCode === 0) dispatch(getPhoto(response.data.data.photos));
};

export const saveProfileInfo = (profileInfo: ProfileType) => async (dispatch: any, getState: any) => {
  const response = await profileAPI.setProfile(profileInfo);
  if (response.data.resultCode === 0) dispatch(getProfile(getState().auth.userId));
  else {
    dispatch(
      stopSubmit('editProfile', {
        _error: response.data.messages[0].length > 0 ? response.data.messages[0] : 'Some error',
      })
    );
    return Promise.reject(response.data.messages[0]);
  }
  return null;
};

export default profileReduser;
