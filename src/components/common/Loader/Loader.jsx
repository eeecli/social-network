import classes from './Loader.module.css';
import loader from '../../../assets/images/loader.svg';
import React from 'react';

let Loader = () => {
  return (
    <div>
      <img src={loader} className={classes.isLoading} />
    </div>
  );
};

export default Loader;
