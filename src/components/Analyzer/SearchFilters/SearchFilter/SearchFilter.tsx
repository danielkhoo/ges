import React from 'react';
import classes from './SearchFilter.module.css';
export interface IProps {
  add(event: any): void;
  remove(event: any): void;
  color: string;
  active: boolean;
}
const searchFilter: React.SFC<IProps> = props => {
  let attachedClasses = [classes.SearchFilter];
  let click = () => props.add(props.children);
  if (props.active) {
    attachedClasses = [classes.SearchFilter, classes.active];
    click = () => props.remove(props.children);
  }

  return (
    <li className={attachedClasses.join(' ')} onClick={click}>
      {props.children}
      <div
        style={{
          background: props.color,
          width: '9px',
          height: '9px',
          'border-radius': ' 50%',
          margin: '5px auto 0px'
        }}
      />
    </li>
  );
};

export default searchFilter;
