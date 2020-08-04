import React from 'react';
import withStyles from 'react-jss';
import PropTypes from 'prop-types';

import styles from './App.style';

function App({ classes }) {
  return (
    <div className={classes.container}>
      hello
    </div>
  );
}

App.propTypes = {
  classes: PropTypes.object,
};

App.defaultProps = {
  classes: {},
};

export default withStyles(styles)(App);
