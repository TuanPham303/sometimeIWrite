import React, { useState, useEffect } from 'react';
import withStyles from 'react-jss';
import ReactMarkdown from 'react-markdown';

import previewCardStyles from './PreviewCard.style';

function PreviewCard({ name, classes }) {
  // eslint-disable-next-line global-require
  const file = require(`../../articles/${name}/${name}.md`);
  const [header, setHeader] = useState('');
  const [preview, setPreview] = useState('');

  useEffect(() => {
    fetch(file)
      .then((res) => res.text())
      .then((data) => {
        const h = data.split('\n')[0];
        const p = data.split('\n')[2].substring(0, 200);
        const previewWith3Dot = `${p}...`;
        setHeader(h);
        setPreview(previewWith3Dot);
      });
  }, [file]);

  return (
    <div className={classes.wrapper}>
      <ReactMarkdown source={header} />
      <ReactMarkdown source={preview} />
    </div>
  );
}

export default withStyles(previewCardStyles)(PreviewCard);
