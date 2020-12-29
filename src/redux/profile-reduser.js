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
      return { ...state,
        newPostText: '',
        posts: [...state.posts, {id: 5,message: state.newPostText,likesCount: 0}]
       };
    case UPDATE_NEW_POST_TEXT:
      return { ...state,
        newPostText: action.newText
      };
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
