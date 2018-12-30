import React from 'react';
import classes from './ListItem.module.css';
const listItem = props => {
  return (
    <div className={classes.ListItemRow}>
      <div className={classes.ListItemCol} style={{ flex: 3 }}>
        {props.data.degree}
      </div>
      <div className={classes.ListItemCol} style={{ flex: 2 }}>
        {props.data.employment}
      </div>
      <div className={classes.ListItemCol} style={{ flex: 2 }}>
        {props.data.mean}
      </div>
      <div className={classes.ListItemCol} style={{ flex: 2 }}>
        {props.data.median}
      </div>
    </div>
  );
};

export default listItem;
