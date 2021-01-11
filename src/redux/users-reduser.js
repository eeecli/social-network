const FOLLOW_TOGGLE = 'FOLLOW-TOGGLE';
const SET_USERS = 'SET-USERS';

let initialState = {
  users: [
    {
      id: 1,
      followed: true,
      fullName: 'Mishulka',
      status:
        'Many desktop publishing packages Many desktop publishing packages',
      icon: 'https://miro.medium.com/max/1200/1*mk1-6aYaf_Bes1E3Imhc0A.jpeg',
      location: {
        country: 'Russia',
        city: 'Ryazan',
      },
    },
    {
      id: 2,
      followed: true,
      fullName: 'Colleni',
      status: 'I Don’t know how?',
      icon:
        'https://anekdotsuper.ru/assets/cache_image/assets/img/koko/viberr-1_440x0_3a6.jpg',
      location: {
        country: 'Russia',
        city: 'Moskow',
      },
    },
    {
      id: 3,
      followed: false,
      fullName: 'Allushka',
      status: 'honey mustard',
      icon: 'https://medialeaks.ru/wp-content/uploads/2020/01/JukzoYHHnSs.jpg',
      location: {
        country: 'Russia',
        city: 'Ryazan',
      },
    },
    {
      id: 4,
      followed: false,
      fullName: 'Kishunchik',
      status: 'You ungrateful jackals',
      icon:
        'https://sun9-50.userapi.com/impf/c850136/v850136968/d1b24/-EMtgReU__k.jpg?size=200x0&quality=96&crop=0,0,960,960&sign=9c0e2c292504f9642a51d5d10997d550&ava=1',
      location: {
        country: 'Russia',
        city: 'Divan',
      },
    },
  ],
};
const usersReduser = (state = initialState, action) => {
  switch (action.type) {
    case FOLLOW_TOGGLE:
      return {
        ...state,
        users: state.users.map((u) => {
          debugger;
          if (u.id === action.id) return { ...u, followed: !u.followed };
          return u;
        }),
      };

    case SET_USERS:
      return {
        ...state,
        users: [...state.users, ...action.users],
      };
    default:
      return state;
  }
};

export const followActionCreator = (userId) => ({
  type: FOLLOW_TOGGLE,
  id: userId,
});

export const setUSersActionCreator = (users) => ({
  type: SET_USERS,
  users: users,
});

export default usersReduser;
