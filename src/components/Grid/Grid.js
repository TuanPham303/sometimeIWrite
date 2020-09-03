import React, { useMemo } from 'react';
import withStyles from 'react-jss';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useLocation,
} from 'react-router-dom';

import gridStyles from './Grid.style';
import { PreviewCard, Article } from '..';
import articleList from '../../articles/articleList';

function renderArticle(name) {
  return (
    <Switch>
      <Route path={`/${name}`}>
        <Article title={name} />
      </Route>
    </Switch>
  );
}

function renderPreviewCard() {
  return articleList.map((name) => {
    return (
      <Link to={`/${name}`}>
        <PreviewCard name={name} key={name} />
      </Link>
    );
  });
}

function renderGridContent(isShowingPreview, location) {
  const pathWithoutSlash = location.pathname.substring(1);

  if (isShowingPreview) {
    return renderPreviewCard();
  }

  return renderArticle(pathWithoutSlash);
}

function Grid({ classes }) {
  const location = useLocation();
  const isShowingPreview = useMemo(() => location.pathname === '/sometimesIWrite/', [location.pathname]);

  return (
    <div className={classes.wrapper}>
      { renderGridContent(isShowingPreview, location) }
    </div>
  );
}

export default withStyles(gridStyles)(Grid);
