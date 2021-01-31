import React from 'react';
import classes from './Contact.module.css';

const Contact = ({contact, link}) => (
  <div className={classes.contact}>
    <a href={link}>{contact}</a>
  </div>
);

export default Contact;
