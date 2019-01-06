import React from 'react';
// CustomTooltipContent.js
import DefaultTooltipContent from 'recharts/lib/component/DefaultTooltipContent';
import classes from './CustomTooltipContent.module.css';
const CustomTooltipContent = props => {
  // payload[0] doesn't exist when tooltip isn't visible
  if (props.payload[0] != null) {
    // we render the default, but with our overridden payload
    return (
      <div className={classes.Tooltip}>
        <div className={classes.TooltipHeading}>
          {props.payload[0].payload.school}
        </div>
        <span className={classes.TooltipText}>
          {props.payload[0].payload.degree}
        </span>
        <div className={classes.TooltipHeading}>
          {props.payload[0].payload.employment}% | $
          {props.payload[0].payload.mean}
        </div>
      </div>
    );
  }

  // we just render the default
  return <DefaultTooltipContent {...props} />;
};

export default CustomTooltipContent;
