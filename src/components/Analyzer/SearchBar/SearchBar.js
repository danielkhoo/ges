import React from 'react';
import classes from './SearchBar.module.css';
const searchBar = props => {
  return (
    <input className={classes.SearchBar} type='text' onChange={props.changed} />
  );
};

export default searchBar;
