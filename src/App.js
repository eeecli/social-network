import React from 'react';
import {BrowserRouter, Route} from 'react-router-dom';
import './App.css';
import {connect} from 'react-redux';
import {compose} from 'redux';
import Cover from './components/Cover/Cover';
import HeaderContainer from './pages/Header/HeaderContainer';
import Navbar from './pages/Navbar/Navbar';
import ProfileContainer from './pages/Profile/ProfileContainer';
import News from './pages/News/News';
import Music from './pages/Music/Music';
import Settings from './pages/Settings/Settings';
import DialogsContainer from './pages/Dialogs/DialogsContainer';
import FriendsBarContainer from './pages/FriendsBar/FriendsBarContainer';
import UsersContainer from './pages/Users/UsersContainer';
import Login from './pages/Login/Login';
import {initApp} from './redux/app-reduser';

class App extends React.Component {
  componentDidMount() {
    this.props.initApp();
  }

  render() {
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
}

const mapStateToProps = (state) => ({
  isAppInit: state.app.isAppInit,
});

export default compose(connect(mapStateToProps, {initApp}))(App);
