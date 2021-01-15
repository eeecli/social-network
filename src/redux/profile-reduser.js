const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const SET_USER_PROFILE = 'SET-USER-PROFILE';

let initialState = {
  posts: [
    { id: 1, message: 'I aint sullen, Im lachrymose', likesCount: 15 },
    {
      id: 2,
      message: 'You have to seize life and relish every minute',
      likesCount: 20,
    },
  ],
  newPostText: '',
  profile: null,
};

const profileReduser = (state = initialState, action) => {
  switch (action.type) {
    case ADD_POST:
      return {
        ...state,
        newPostText: '',
        posts: [
          ...state.posts,
          { id: 5, message: state.newPostText, likesCount: 0 },
        ],
      };
    case UPDATE_NEW_POST_TEXT:
      return { ...state, newPostText: action.newText };
    case SET_USER_PROFILE:
      return { ...state, profile: action.profile };
    default:
      return state;
  }
};

export const addPost = () => ({ type: ADD_POST });

export const updatePost = (text) => ({
  type: UPDATE_NEW_POST_TEXT,
  newText: text,
});

export const setProfile = (profile) => ({
  type: SET_USER_PROFILE,
  profile,
});

export default profileReduser;
