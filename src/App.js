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
            render={() => (
              <Profile
                profilePage={props.state.profilePage}
                addPost={props.addPost}
                updateNewPostText={props.updateNewPostText}
              />
            )}
          />
          <Route
            path='/dialogs'
            render={() => (
              <Dialogs
                dialogsPage={props.state.dialogsPage}
                updateNewMessageText={props.updateNewMessageText}
                addMessage={props.addMessage}
              />
            )}
          />
          <Route path='/news' component={News} />
          <Route path='/music' component={Music} />
          <Route path='/settings' component={Settings} />
        </div>
        <FriendsBar />
      </div>
    </BrowserRouter>
  );
}

export default App;
