import * as React from 'react'
import classes from './Layout.module.css'

const layout: React.SFC<{}> = props => {
  return <main className={classes.Layout}>{props.children}</main>
}

export default layout
