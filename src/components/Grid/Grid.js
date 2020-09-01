import React from 'react';
import withStyles from 'react-jss';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink,
} from 'react-router-dom';

import gridStyles from './Grid.style';
import { PreviewCard, Article } from '..';
import articleList from '../../articles/articleList';

function renderPreviewCard() {
  return articleList.map((name) => (
    <Router>
      <NavLink to='/aasd'>
        <PreviewCard name={name} key={name} />
      </NavLink>
      <Switch>
        <Route path='/aasd'>
          <Article title={name} />
        </Route>
      </Switch>
    </Router>
  ));
}

function Grid({ classes }) {
  return (
    <div className={classes.wrapper}>
      { renderPreviewCard() }
    </div>
  );
}

export default withStyles(gridStyles)(Grid);
