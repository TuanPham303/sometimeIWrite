import React from 'react';
import withStyles from 'react-jss';

import navBarStyles from './NavBar.style';

function NavBar({ classes }) {
  return (
    <div className={classes.wrapper}>
      <a href="/">home</a>
    </div>
  );
}

export default withStyles(navBarStyles)(NavBar);
