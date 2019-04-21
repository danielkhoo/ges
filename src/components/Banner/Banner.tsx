import React from 'react';
import classes from './Banner.module.css';
const banner: React.SFC<{}> = props => {
  return (
    <div className={classes.Banner}>
      <div className={classes.BannerTitle}>Graduate Employment Survey 2018</div>
      <div className={classes.BannerSubtitle}>
        <p>Salary and full-time employment rates for NUS, NTU, SMU, SIT, SUTD, SUSS graduates based on degree.</p>
      </div>
    </div>
  );
};

export default banner;
