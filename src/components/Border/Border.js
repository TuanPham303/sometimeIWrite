import React from 'react';
import withStyles from 'react-jss';

import borderStyles from './Border.style';

function Border({ classes }) {
  return (
    <>
      <div className={classes.border1Top} />
      <div className={classes.border1Right} />
      <div className={classes.border1Bottom} />
      <div className={classes.border1Left} />
      <div className={classes.border2Top} />
      <div className={classes.border2Right} />
      <div className={classes.border2Bottom} />
      <div className={classes.border2Left} />
    </>
  );
}

export default withStyles(borderStyles)(Border);
