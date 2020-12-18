let store = {
  _state: {
    profilePage: {
      posts: [
        { id: 1, message: 'I aint sullen, Im lachrymose', likesCount: 15 },
        {
          id: 2,
          message: 'You have to seize life and relish every minute',
          likesCount: 20,
        },
      ],
      newPostText: '',
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
      newMessageText: '',
    },
  },

  _callSubscriber() {
    console.log(this._state.newMessageText);
  },

  dispatch(action) {
    debugger;
    if (action.type === 'ADD-POST') {
      let post = {
        id: 5,
        message: this._state.profilePage.newPostText,
        likesCount: 0,
      };
      this._state.profilePage.posts.push(post);
      this._state.profilePage.newPostText = '';
      this._callSubscriber(this._state);
    } else if (action.type === 'UPDATE-NEW-POST-TEXT') {
      this._state.profilePage.newPostText = action.newText;
      this._callSubscriber(this._state);
    } else if (action.type === 'ADD-MESSAGE') {
      let message = {
        id: 5,
        message: this._state.dialogsPage.newMessageText,
      };
      this._state.dialogsPage.messages.push(message);
      this._state.dialogsPage.newMessageText = '';
      this._callSubscriber(this._state);
    } else if (action.type === 'UPDATE-NEW-MESSAGE-TEXT') {
      this._state.dialogsPage.newMessageText = action.newMessage;
      this._callSubscriber(this._state);
    }
  },

  subscribe(observer) {
    this._callSubscriber = observer;
  },

  getState() {
    return this._state;
  },
};

export default store;
window.store = store;
