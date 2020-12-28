const ADD_MESSAGE = 'ADD-MESSAGE';
const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT';

let initialState = {
  dialogs: [
    { id: 1, name: 'Mishulka' },
    { id: 2, name: 'Colleni' },
    { id: 3, name: 'Allushka' },
    { id: 4, name: 'Kishunchik' },
  ],
  messages: [
    { id: 1, message: 'Hi' },
    { id: 2, message: 'Where are you?' },
    { id: 3, message: 'I bring the shawerma for you' },
  ],
  newMessageText: '',
};

const dialogsReduser = (state = initialState, action) => {
  let stateCopy = { ...state };
  switch (action.type) {
    case ADD_MESSAGE:
      let message = {
        id: 5,
        message: state.newMessageText,
      };
      stateCopy.messages = [...state.messages];
      stateCopy.messages.push(message);
      stateCopy.newMessageText = '';
      return stateCopy;
    case UPDATE_NEW_MESSAGE_TEXT:
      stateCopy.newMessageText = action.newMessage;
      return stateCopy;
    default:
      return state;
  }
};

export const sendMessageActionCreator = () => ({ type: ADD_MESSAGE });

export const updateNewMessageTextActionCreator = (text) => ({
  type: UPDATE_NEW_MESSAGE_TEXT,
  newMessage: text,
});

export default dialogsReduser;
