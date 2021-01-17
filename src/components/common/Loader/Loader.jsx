import React from 'react';
import classes from './Loader.module.css';
import loader from '../../../assets/images/loader.svg';

const Loader = () => (
  <div>
    <img src={loader} className={classes.isLoading} alt='loading' />
  </div>
);

export default Loader;
