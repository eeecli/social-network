import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import './App.css';
import Cover from './components/Cover/Cover';
import Dialogs from './components/Dialogs/Dialogs';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import News from './components/News/News';
import Music from './components/Music/Music';
import Settings from './components/Settings/Settings';
import FriendsBar from './components/FriendsBar/FriendsBar';
import DialogsContainer from './components/Dialogs/DialogsContainer';

function App(props) {
  return (
    <BrowserRouter>
      <div className='app-wrapper'>
        <Header />
        <Cover />
        <Navbar />
        <div className='app-wrapper-content'>
          <Route
            path='/profile'
            render={() => <Profile store={props.store} />}
          />
          <Route
            path='/dialogs'
            render={() => <DialogsContainer store={props.store} />}
          />
          <Route path='/news' component={News} />
          <Route path='/music' component={Music} />
          <Route path='/settings' component={Settings} />
        </div>
        <FriendsBar friendsBar={props.state.friendsBar} />
      </div>
    </BrowserRouter>
  );
}

export default App;
