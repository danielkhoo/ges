import React from 'react';
import classes from './Notes.module.css';
const notes: React.SFC<{}> = props => {
  return (
    <div className={classes.Notes}>
      <p>
        Data from the <a href='https://www.moe.gov.sg/education/post-secondary'>Ministry of Education.</a>
      </p>
      <span>Notes: </span>
      <ul>
        <li>SIT data for 2018 has not yet been released, data shown is from GES 2018.</li>
        <li>
          Some degree programs have insufficient respondents for 2018, data display instead from GES 2018. These are
          marked with (2017).
        </li>
        <li>
          Full-time employment rate refers to non-temporary employment of at least 35 hours a week and contracts of one
          year or more.
        </li>
        <li>
          Basic monthly salary pertains only to full-time permanently employed graduates. It comprises basic pay before
          deduction of employee's CPF contributions and personal income tax. Excludes employer’s CPF contributions,
          bonuses, stock options, overtime payments, commissions, fixed allowances, other regular cash payments, lump
          sum payments, and payments-in-kind.
        </li>
      </ul>
    </div>
  );
};

export default notes;
