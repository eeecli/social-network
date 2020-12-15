let renderTree = () => {};

let state = {
  profilePage: {
    posts: [
      { id: 1, message: 'I aint sullen, Im lachrymose', likesCount: 15 },
      {
        id: 2,
        message: 'You have to seize life and relish every minute',
        likesCount: 20,
      },
    ],
    newPostText: 'ыыыыы',
  },
  dialogsPage: {
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
    newMessageText: 'zaaa',
  },
};

export const addMessage = () => {
  let message = {
    id: 5,
    message: state.dialogsPage.newMessageText,
  };
  state.dialogsPage.messages.push(message);
  state.dialogsPage.newMessageText = '';
  renderTree(state);
};

export const updateNewMessageText = (newMessage) => {
  state.dialogsPage.newMessageText = newMessage;
  renderTree(state);
};

export const addPost = () => {
  let post = {
    id: 5,
    message: state.profilePage.newPostText,
    likesCount: 0,
  };
  state.profilePage.posts.push(post);
  state.profilePage.newPostText = '';
  renderTree(state);
};

export const updateNewPostText = (newText) => {
  state.profilePage.newPostText = newText;
  renderTree(state);
};

export const subscribe = (observer) => {
  renderTree = observer;
};

export default state;
