import React from 'react';
import ListItem from './ListItem/ListItem';

const ListItems = props => {
  return (
    <div>
      {props.items.map(item => (
        <ListItem key={item.degree} data={{ ...item }} />
      ))}
    </div>
  );
};

export default ListItems;
