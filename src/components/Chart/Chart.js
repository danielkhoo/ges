import React from 'react';
import { ResponsiveContainer, ScatterChart, Scatter, Cell, XAxis, YAxis, Label, Tooltip, Dot } from 'recharts';
import CustomTooltipContent from './CustomToolTipContent/CustomTooltipContent';
import classes from './Chart.module.css';
import colorCode from '../../assets/colorCode';

const colorBySchool = school => {
  if (school === 'NUS') {
    return colorCode[0];
  } else if (school === 'NTU') {
    return colorCode[1];
  } else if (school === 'SMU') {
    return colorCode[2];
  } else if (school === 'SIT') {
    return colorCode[3];
  } else if (school === 'SUTD') {
    return colorCode[4];
  } else {
    return colorCode[5];
  }
};
const CustomizedShape = props => {
  const { cx, cy, fill } = props;
  return (
    <g>
      <Dot cx={cx} cy={cy} r={6} fill={fill} />
    </g>
  );
};
const chart = props => {
  return (
    <div className={classes.ChartContainer}>
      <ResponsiveContainer aspect={1.4}>
        <ScatterChart margin={{ top: 10, right: 10, bottom: 0, left: -15 }}>
          <XAxis
            type='number'
            domain={['dataMin', 'dataMax']}
            ticks={[50, 60, 70, 80, 90, 100]}
            dataKey={'employment'}
            name='Employment Rate'
            unit='%'
            padding={{ left: 30, right: 10 }}
          >
            <Label value='Full-Time Employment Rate' offset={10} position='top' />
          </XAxis>
          <YAxis
            type='number'
            domain={['dataMin', 'dataMax']}
            ticks={[2000, 3000, 4000, 5000]}
            dataKey={'mean'}
            name='Mean Monthly Salary'
            padding={{ left: 0, right: 0 }}
          >
            <Label value='Salary' offset={-15} angle={90} position='insideRight' />
          </YAxis>
          <Tooltip cursor={{ strokeDasharray: '3 3' }} content={<CustomTooltipContent />} />
          <Scatter name='A school' data={props.chartData} shape={<CustomizedShape />}>
            {props.chartData.map((entry, index) => {
              return <Cell key={`cell-${index}`} fill={colorBySchool(entry.school)} />;
            })}
          </Scatter>
        </ScatterChart>
      </ResponsiveContainer>
    </div>
  );
};

export default chart;
