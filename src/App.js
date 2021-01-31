import React, {Suspense} from 'react';
import {BrowserRouter, Route, withRouter} from 'react-router-dom';
import './App.css';
import {connect, Provider} from 'react-redux';
import {compose} from 'redux';
import Cover from './components/Cover/Cover';
import HeaderContainer from './pages/Header/HeaderContainer';
import Navbar from './pages/Navbar/Navbar';
import ProfileContainer from './pages/Profile/ProfileContainer';
import News from './pages/News/News';
import Music from './pages/Music/Music';
import Settings from './pages/Settings/Settings';
import FriendsBarContainer from './pages/FriendsBar/FriendsBarContainer';
import UsersContainer from './pages/Users/UsersContainer';
import Login from './pages/Login/Login';
import {initApp} from './redux/app-reduser';
import store from './redux/redux-store';
import Loader from './components/common/Loader/Loader';

const DialogsContainer = React.lazy(() => import('./pages/Dialogs/DialogsContainer'));

class SocialNetApp extends React.Component {
  componentDidMount() {
    this.props.initApp();
  }

  render() {
    return (
      <div className='app-wrapper'>
        <HeaderContainer />
        <Cover />
        <Navbar />
        <div className='app-wrapper-content'>
          <Suspense fallback={<Loader />}>
            <Route path='/profile/:userId?' render={() => <ProfileContainer />} />
            <Route path='/dialogs' render={() => <DialogsContainer />} />
            <Route path='/news' component={News} />
            <Route path='/music' component={Music} />
            <Route path='/settings' component={Settings} />
            <Route path='/users' render={() => <UsersContainer />} />
            <Route path='/login' component={Login} />
          </Suspense>
        </div>
        <FriendsBarContainer />
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  isAppInit: state.app.isAppInit,
});

const AppContainer = compose(withRouter, connect(mapStateToProps, {initApp}))(SocialNetApp);

const App = () => (
  <BrowserRouter>
    <Provider store={store}>
      <AppContainer />
    </Provider>
  </BrowserRouter>
);

export default App;
