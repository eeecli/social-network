const ADD_MESSAGE = 'social-network/dialogs-reduser/ADD-MESSAGE';
const UPDATE_NEW_MESSAGE_TEXT = 'social-network/dialogs-reduser/UPDATE-NEW-MESSAGE-TEXT';

type DialogsType = {
  id: number,
  name: string,
};

type MessagesType = {
  id: number,
  message: string,
};

export type InitialStateType = {
  dialogs: Array<DialogsType>
  messages: Array<MessagesType>
  newMessageText: null | string
};

const initialState: InitialStateType = {
  dialogs: [
    {id: 1, name: 'Mishulka'},
    {id: 2, name: 'Colleni'},
    {id: 3, name: 'Allushka'},
    {id: 4, name: 'Kishunchik'},
  ],
  messages: [
    {id: 1, message: 'Hi'},
    {id: 2, message: 'Where are you?'},
    {id: 3, message: 'I bring the shawerma for you'},
  ],
  newMessageText: null,
};

const dialogsReduser = (state = initialState, action: any): InitialStateType => {
  switch (action.type) {
    case ADD_MESSAGE:
      return {
        ...state,
        messages: [...state.messages, {id: 5, message: action.message}],
      };
    case UPDATE_NEW_MESSAGE_TEXT:
      return {...state, newMessageText: action.newMessage};
    default:
      return state;
  }
};

type SendMessageType = {
  type: typeof ADD_MESSAGE
  message: string
};

export const sendMessage = (message: string): SendMessageType => ({type: ADD_MESSAGE, message});

export default dialogsReduser;
