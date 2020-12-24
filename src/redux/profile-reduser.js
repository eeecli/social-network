const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';

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
};

const profileReduser = (state = initialState, action) => {
  switch (action.type) {
    case ADD_POST:
      let post = {
        id: 5,
        message: state.newPostText,
        likesCount: 0,
      };
      state.posts.push(post);
      state.newPostText = '';
      return state;
    case UPDATE_NEW_POST_TEXT:
      state.newPostText = action.newText;
      return state;
    default:
      return state;
  }
};

export const addPostActionCreator = () => ({ type: ADD_POST });

export const updatePostActionCreator = (text) => ({
  type: UPDATE_NEW_POST_TEXT,
  newText: text,
});

export default profileReduser;
