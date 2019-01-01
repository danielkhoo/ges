import React from 'react';
import ListItem from './ListItem/ListItem';
import ListLabel from './ListLabel/ListLabel';
import Aux from '../../../hoc/Aux/Aux';
const ListItems = props => {
  let groups = [];
  return (
    <div>
      {props.items.map(item => {
        if (groups.indexOf(item.group) === -1) {
          groups.push(item.group);
          return (
            <Aux key={item.degree}>
              <ListLabel>{item.group}</ListLabel>
              <ListItem data={{ ...item }} />
            </Aux>
          );
        } else {
          return <ListItem key={item.degree} data={{ ...item }} />;
        }
      })}
    </div>
  );
};

export default ListItems;
