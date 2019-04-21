import React from 'react';
import classes from './Banner.module.css';
const banner: React.SFC<{}> = props => {
  return (
    <div className={classes.Banner}>
      <div className={classes.BannerTitle}>Graduate Employment Survey 2019</div>
      <div className={classes.BannerSubtitle}>
        <p>Salary and full-time employment rates for NUS, NTU, SMU, SIT and SUTD graduates by degree.</p>
        <p>
          Data from the <a href='https://www.moe.gov.sg/education/post-secondary'>Ministry of Education.</a>
        </p>
      </div>
    </div>
  );
};

export default banner;
