import React from 'react';
import withStyles from 'react-jss';

import previewCardStyles from './PreviewCard.style';

// const file = require('../../articles/');

function PreviewCard(props) {

  // fetch(file)
  //   .then((res) => {
  //     console.log(res)
  //     return res
  //   })
  // .then((data) => {
  //   console.log(data)
  // })

  return (
    <div>
      <div>title</div>
      <div>preview</div>
    </div>
  );
}

export default withStyles(previewCardStyles)(PreviewCard);
