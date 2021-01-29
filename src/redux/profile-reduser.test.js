import profileReduser, {addPost, deletePost, setProfile, setStatus} from './profile-reduser';

const state = {
  posts: [
    {id: 1, message: 'I aint sullen, Im lachrymose', likesCount: 15},
    {
      id: 2,
      message: 'You have to seize life and relish every minute',
      likesCount: 20,
    },
  ],
  profile: null,
  status: null,
};

it('should be add post', () => {
  const action = addPost('newTextPost');
  const newState = profileReduser(state, action);
  expect(newState.posts.length).toBe(3);
});

it('should be add profile', () => {
  const action = setProfile({id: 1, login: 'eclipese'});
  const newState = profileReduser(state, action);
  expect(newState.profile.id).toBe(1);
});

it('should be set correct status', () => {
  const action = setStatus('Have a nice day');
  const newState = profileReduser(state, action);
  expect(newState.status).toBe('Have a nice day');
});

it('should be set decrement posts', () => {
  const postsLength = state.posts.length;
  const action = deletePost(1);
  const newState = profileReduser(state, action);
  expect(newState.posts.length).toBe(postsLength - 1);
});
