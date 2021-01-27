import React from 'react';
import {NavLink} from 'react-router-dom';
import Button from '../../components/Button/Button';
import classes from './Header.module.css';

const Header = (props) => (
  <header className={classes.headerWrapper}>
    <div className={classes.header}>
      <div className={classes.headerLogo}>
        <img src='https://static.wikia.nocookie.net/rainbowsix/images/0/0c/Dokkaebi_icon.png' alt='logo' />
      </div>
      <div className={classes.userName}>
        {props.authData.isAuth === true ? (
          <div>
            {props.authData.login} <Button buttonText='Logout' onClick={props.authData.logout} />
          </div>
        ) : (
          <NavLink to='/login'>Login</NavLink>
        )}
      </div>
    </div>
  </header>
);

export default Header;
