import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import './App.css';
import Cover from './components/Cover/Cover';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import News from './components/News/News';
import Music from './components/Music/Music';
import Settings from './components/Settings/Settings';
import DialogsContainer from './components/Dialogs/DialogsContainer';
import FriendsBarContainer from './components/FriendsBar/FriendsBarContainer';
import UsersContainer from './components/Users/UsersContainer';

function App() {
  return (
    <BrowserRouter>
      <div className='app-wrapper'>
        <Header />
        <Cover />
        <Navbar />
        <div className='app-wrapper-content'>
          <Route path='/profile' render={() => <Profile />} />
          <Route path='/dialogs' render={() => <DialogsContainer />} />
          <Route path='/news' component={News} />
          <Route path='/music' component={Music} />
          <Route path='/settings' component={Settings} />
          <Route path='/users' render={() => <UsersContainer />} />
        </div>
        <FriendsBarContainer />
      </div>
    </BrowserRouter>
  );
}

export default App;
