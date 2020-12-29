let initialState = {
  friends: [
    {
      id: 1,
      name: 'Mishulka',
      icon: 'https://miro.medium.com/max/1200/1*mk1-6aYaf_Bes1E3Imhc0A.jpeg',
    },
    {
      id: 2,
      name: 'Colleni',
      icon:
        'https://anekdotsuper.ru/assets/cache_image/assets/img/koko/viberr-1_440x0_3a6.jpg',
    },
    {
      id: 3,
      name: 'Allushka',
      icon: 'https://medialeaks.ru/wp-content/uploads/2020/01/JukzoYHHnSs.jpg',
    },
    {
      id: 4,
      name: 'Kishunchik',
      icon:
        'https://sun9-50.userapi.com/impf/c850136/v850136968/d1b24/-EMtgReU__k.jpg?size=200x0&quality=96&crop=0,0,960,960&sign=9c0e2c292504f9642a51d5d10997d550&ava=1',
    },
  ],
};
const friendsbarReduser = (state = initialState, action) => {
  switch(action.type){
      default:
        return state;
  }
};
export default friendsbarReduser;
