import React from 'react';
import withStyles from 'react-jss';
import PropTypes from 'prop-types';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect,
} from 'react-router-dom';

import appStyles from './App.style';
import { Border, NavBar, Grid } from './components';

function App({ classes }) {
  return (
    <>
      <div className={classes.wrapper}>
        <NavBar />
        <Router>
          {/* <Redirect to='/someTimesIWrite'> */}
            <Grid />
          {/* </Redirect> */}
        </Router>
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
