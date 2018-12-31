import React from 'react';
import classes from './ListLabel.module.css';
const listLabel = props => {
  return <div className={classes.ListLabel}>{props.children}</div>;
};

export default listLabel;
