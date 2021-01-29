import {profileAPI} from '../api/api';

const ADD_POST = 'social-network/profile-reduser/ADD-POST';
const SET_USER_PROFILE = 'social-network/profile-reduser/SET-USER-PROFILE';
const SET_USER_STATUS = 'social-network/profile-reduser/SET-USER-STATUS';
const DELETE_POST = 'social-network/profile-reduser/DELETE-POST';

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

export default profileReduser;
