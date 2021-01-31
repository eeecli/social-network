import {stopSubmit} from 'redux-form';
import {profileAPI} from '../api/api';

const ADD_POST = 'social-network/profile-reduser/ADD-POST';
const SET_USER_PROFILE = 'social-network/profile-reduser/SET-USER-PROFILE';
const SET_USER_STATUS = 'social-network/profile-reduser/SET-USER-STATUS';
const DELETE_POST = 'social-network/profile-reduser/DELETE-POST';
const GET_PHOTO = 'social-network/profile-reduser/GET-PHOTO';

const initialState = {
  posts: [
    {id: 1, message: 'I aint sullen, Im lachrymose', likesCount: 15},
    {
      id: 2,
      message: 'You have to seize life and relish every minute',
      likesCount: 20,
    },
  ],
  profile: null,
  status: null,
};

const profileReduser = (state = initialState, action) => {
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
      return {...state, profile: {...state.profile, photos: action.photos}};
    default:
      return state;
  }
};

export const addPost = (post) => ({type: ADD_POST, post});

export const setProfile = (profile) => ({
  type: SET_USER_PROFILE,
  profile,
});

export const setStatus = (status) => ({
  type: SET_USER_STATUS,
  status,
});

export const deletePost = (id) => ({
  type: DELETE_POST,
  id,
});

export const getPhoto = (photos) => ({
  type: GET_PHOTO,
  photos,
});

export const getProfile = (userId) => async (dispatch) => {
  const response = await profileAPI.getProfile(userId);
  dispatch(setProfile(response.data));
};

export const getStatus = (userId) => async (dispatch) => {
  const response = await profileAPI.getStatus(userId);
  dispatch(setStatus(response.data));
};

export const updateStatus = (status) => async (dispatch) => {
  const response = await profileAPI.updateStatus(status);
  if (response.resultCode === 0) dispatch(setStatus(status));
};

export const putPhoto = (photos) => async (dispatch) => {
  const response = await profileAPI.putPhoto(photos);
  if (response.data.resultCode === 0) dispatch(getPhoto(response.data.data.photos));
};

/* eslint consistent-return: "warn" */
export const saveProfileInfo = (profileInfo) => async (dispatch, getState) => {
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
};

export default profileReduser;
