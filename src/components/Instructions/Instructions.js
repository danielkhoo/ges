import React from 'react';
import classes from './Instructions.module.css';

const instructions = props => {
  return <div className={classes.Instructions}>{props.children}</div>;
};

export default instructions;
