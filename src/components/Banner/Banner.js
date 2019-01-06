import React from 'react';
import classes from './Banner.module.css';
const banner = props => {
  return (
    <div className={classes.Banner}>
      <div className={classes.BannerTitle}>Graduate Employment Survey 2018</div>
      <div className={classes.BannerSubtitle}>
        <p>
          Salary and employment rate of local university graduates by degree.
        </p>
        <p>Data from the Ministry of Education.</p>
      </div>
    </div>
  );
};

export default banner;
