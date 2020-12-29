const FOLLOW_USER = 'FOLLOW-USER';
const UNFOLLOW_USER = 'UNFOLLOW-USER';
const SHOW_MORE = 'SHOW-MORE';

let initialState = {
  users: [
    {
      id: 1,
      followed: true,
      name: 'Mishulka',
      status: 'Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text',
      icon: 'https://miro.medium.com/max/1200/1*mk1-6aYaf_Bes1E3Imhc0A.jpeg',
      location: {
        country: 'Russia',
        city: 'Ryazan'
      }
    },
    {
      id: 2,
      followed: true,
      name: 'Colleni',
      status: 'I Don’t know how? But i believe that it is possible one day if i stay with my dream all time',
      icon: 'https://anekdotsuper.ru/assets/cache_image/assets/img/koko/viberr-1_440x0_3a6.jpg',
      location: {
        country: 'Russia',
        city: 'Moskow'
      }
    },
    {
      id: 3,
      followed: false,
      name: 'Allushka',
      status: 'Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text',
      icon: 'https://medialeaks.ru/wp-content/uploads/2020/01/JukzoYHHnSs.jpg',
      location: {
        country: 'Russia',
        city: 'Ryazan'
      }
    },
    {
      id: 4,
      followed: false,
      name: 'Kishunchik',
      status: 'Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text',
      icon: 'https://sun9-50.userapi.com/impf/c850136/v850136968/d1b24/-EMtgReU__k.jpg?size=200x0&quality=96&crop=0,0,960,960&sign=9c0e2c292504f9642a51d5d10997d550&ava=1',
      location: {
        country: 'Russia',
        city: 'Divan'
      }
    },
  ],
};
const usersReduser = (state = initialState, action) => {
  switch(action.type){
    case FOLLOW_USER:
      return {}
    case UNFOLLOW_USER:
      return {}
    case SHOW_MORE:
      return {}
    default:
      return state;
  }
};
export default usersReduser;
