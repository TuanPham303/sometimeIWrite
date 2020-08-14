import React from 'react';
import withStyles from 'react-jss';

import gridStyles from './Grid.style';
import { PreviewCard } from '..';

function Grid({ classes }) {
  return (
    <div className={classes.wrapper}>
      <PreviewCard />
      <PreviewCard />
      <PreviewCard />
      <PreviewCard />
    </div>
  );
}

export default withStyles(gridStyles)(Grid);
