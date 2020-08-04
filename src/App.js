import React from 'react';
import withStyles from 'react-jss';
import PropTypes from 'prop-types';

import styles from './App.style';
import { Border } from './components';

function App({ classes }) {
  return (
    <>
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

export default withStyles(styles)(App);
