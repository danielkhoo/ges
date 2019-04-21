import React from 'react';
import classes from './Notes.module.css';
const notes: React.SFC<{}> = props => {
  return (
    <div className={classes.Notes}>
      <span>Notes: </span>
      <ul>
        <li>
          Full-time employment rate refers to non-temporary employment of at
          least 35 hours a week and contracts of one year or more.
        </li>
        <li>
          Basic monthly salary pertains only to full-time permanently employed
          graduates. It comprises basic pay before deduction of employee's CPF
          contributions and personal income tax. Excludes employer’s CPF
          contributions, bonuses, stock options, overtime payments, commissions,
          fixed allowances, other regular cash payments, lump sum payments, and
          payments-in-kind.
        </li>
      </ul>
    </div>
  );
};

export default notes;
