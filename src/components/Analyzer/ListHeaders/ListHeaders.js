import React from 'react';
import classes from './ListHeaders.module.css';
const ListHeaders = props => {
  return (
    <div className={classes.ListHeaders}>
      <div className={classes.col} style={{ flex: 3 }}>
        Degree
      </div>
      <div className={classes.col} style={{ flex: 2 }}>
        Full-Time Employment Rate
      </div>
      <div className={classes.col} style={{ flex: 4 }}>
        <div style={{ width: '100%' }}>Basic Monthly Salary</div>
        <div style={{ display: 'flex', width: '100%' }}>
          <div className={classes.subHeading}>Mean </div>
          <div className={classes.subHeading}>Median</div>
        </div>
      </div>
    </div>
  );
};

export default ListHeaders;
