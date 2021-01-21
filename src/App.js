import React from 'react';
import {BrowserRouter, Route} from 'react-router-dom';
import './App.css';
import Cover from './components/Cover/Cover';
import HeaderContainer from './components/Header/HeaderContainer';
import Navbar from './components/Navbar/Navbar';
import ProfileContainer from './components/Profile/ProfileContainer';
import News from './components/News/News';
import Music from './components/Music/Music';
import Settings from './components/Settings/Settings';
import DialogsContainer from './components/Dialogs/DialogsContainer';
import FriendsBarContainer from './components/FriendsBar/FriendsBarContainer';
import UsersContainer from './components/Users/UsersContainer';
import Login from './components/Login/Login';

function App() {
  return (
    <BrowserRouter>
      <div className='app-wrapper'>
        <HeaderContainer />
        <Cover />
        <Navbar />
        <div className='app-wrapper-content'>
          <Route path='/profile/:userId?' render={() => <ProfileContainer />} />
          <Route path='/dialogs' render={() => <DialogsContainer />} />
          <Route path='/news' component={News} />
          <Route path='/music' component={Music} />
          <Route path='/settings' component={Settings} />
          <Route path='/users' render={() => <UsersContainer />} />
          <Route path='/login' component={Login} />
        </div>
        <FriendsBarContainer />
      </div>
    </BrowserRouter>
  );
}

export default App;
