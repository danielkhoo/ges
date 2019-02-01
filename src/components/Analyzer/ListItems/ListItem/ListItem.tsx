import React from 'react'
import classes from './ListItem.module.css'
import { Degree } from '../../../../classes/Degree'

export interface Props {
  data: Degree
}
const listItem: React.SFC<Props> = props => {
  return (
    <div className={classes.ListItemRow}>
      <div className={classes.ListItemCol} style={{ flex: 5 }}>
        {props.data.degree}
      </div>
      <div className={classes.ListItemCol} style={{ flex: 2 }}>
        {props.data.employment}
      </div>
      <div className={classes.ListItemCol} style={{ flex: 2 }}>
        {props.data.mean}
      </div>
      <div className={classes.ListItemCol} style={{ flex: 2 }}>
        {props.data.median}
      </div>
    </div>
  )
}

export default listItem
