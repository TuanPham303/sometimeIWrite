import React, { useState, useEffect } from 'react';
import ReactMarkdown from 'react-markdown';

function Article({ title }) {
  const file = require(`../../articles/${title}/${title}.md`);
  const [content, setContent] = useState('');

  useEffect(() => {
    fetch(file)
      .then((res) => res.text())
      .then((data) => {
        setContent(data);
      });
  }, [file]);

  return (
    <ReactMarkdown source={content} />
  );
}

export default Article;
