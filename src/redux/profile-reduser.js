import {profileAPI} from '../api/api';

const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const SET_USER_PROFILE = 'SET-USER-PROFILE';
const SET_USER_STATUS = 'SET-USER-STATUS';

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

export const getProfile = (userId) => (dispatch) => {
  profileAPI.getProfile(userId).then((response) => {
    dispatch(setProfile(response));
  });
};

export const getStatus = (userId) => (dispatch) => {
  profileAPI.getStatus(userId).then((response) => {
    dispatch(setStatus(response));
  });
};

export const updateStatus = (status) => (dispatch) => {
  profileAPI.updateStatus(status).then((response) => {
    if (response.resultCode === 0) dispatch(setStatus(status));
  });
};

export default profileReduser;
