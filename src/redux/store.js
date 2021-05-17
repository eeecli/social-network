import dialogsReduser from './dialogs-reduser';
import friendsbarReduser from './friendsbar-reduser';
import profileReduser from './profile-reduser';

const store = {
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
    friendsBar: {
      friends: [
        {
          id: 1,
          name: 'Mishulka',
          icon: 'https://miro.medium.com/max/1200/1*mk1-6aYaf_Bes1E3Imhc0A.jpeg',
        },
        {
          id: 2,
          name: 'Colleni',
          icon: 'https://anekdotsuper.ru/assets/cache_image/assets/img/koko/viberr-1_440x0_3a6.jpg',
        },
        {
          id: 3,
          name: 'Allushka',
          icon: 'https://medialeaks.ru/wp-content/uploads/2020/01/JukzoYHHnSs.jpg',
        },
        {
          id: 4,
          name: 'Kishunchik',
          icon: 'https://sun9-50.userapi.com/impf/c850136/v850136968/d1b24/-EMtgReU__k.jpg?size=200x0&quality=96&crop=0,0,960,960&sign=9c0e2c292504f9642a51d5d10997d550&ava=1',
        },
      ],
    },
  },

  _callSubscriber() {
    console.log(this._state.newMessageText);
  },

  dispatch(action) {
    this._state.dialogsPage = dialogsReduser(this._state.dialogsPage, action);
    this._state.profilePage = profileReduser(this._state.profilePage, action);
    this._state.friendsBar = friendsbarReduser(this._state.friendsBar, action);
    this._callSubscriber(this._state);
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
