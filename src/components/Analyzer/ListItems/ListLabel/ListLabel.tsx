import * as React from 'react'
import classes from './ListLabel.module.css'
const listLabel: React.SFC<{}> = props => {
  return <div className={classes.ListLabel}>{props.children}</div>
}

export default listLabel
