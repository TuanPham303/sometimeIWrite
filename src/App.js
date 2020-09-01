import React from 'react';
import withStyles from 'react-jss';
import PropTypes from 'prop-types';

import appStyles from './App.style';
import { Border, NavBar, Grid } from './components';

function App({ classes }) {
  return (
    <>
      <div className={classes.wrapper}>
        <NavBar />
        <Grid />
      </div>
      <Border />
    </>
  );
}

App.propTypes = {
  classes: PropTypes.object,
};

App.defaultProps = {
  classes: {},
};

export default withStyles(appStyles)(App);
