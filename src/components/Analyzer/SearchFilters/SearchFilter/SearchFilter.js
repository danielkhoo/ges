import React from 'react';
import classes from './SearchFilter.module.css';
const searchFilter = props => {
  let attachedClasses = [classes.SearchFilter];
  let click = () => props.add(props.children);
  if (props.active) {
    attachedClasses = [classes.SearchFilter, classes.active];
    click = () => props.remove(props.children);
  }

  return (
    <li className={attachedClasses.join(' ')} onClick={click}>
      {props.children}
    </li>
  );
};

export default searchFilter;
