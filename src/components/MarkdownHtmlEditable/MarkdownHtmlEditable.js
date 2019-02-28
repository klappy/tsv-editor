import React from 'react';
import PropTypes from 'prop-types';

import * as helpers from './helpers';

const MarkdownHtmlEditable = ({
  markdown,
  handleChange,
  inputFilters,
  outputFilters,
  style,
  raw,
}) => {
  markdown = markdown || '';
  let component;
  if (raw) {
    component = (
      <pre
      style={style}
      dir="auto"
      contentEditable
      onBlur={(e)=>{
        const _markdown = e.target.innerText;
        handleChange(_markdown);
      }}
      dangerouslySetInnerHTML={
        { __html: markdown }
      }
      />
    );
  } else {
    component = (
      <div
      style={style}
      dir="auto"
      contentEditable
      dangerouslySetInnerHTML={{
        __html: helpers.markdownToHtml({markdown, inputFilters})
      }}
      onBlur={(e)=>{
        const html = e.target.innerHTML;
        const _markdown = helpers.htmlToMarkdown({html, outputFilters});
        handleChange(_markdown);
      }}
      />
    );
  }
  return component;
};

MarkdownHtmlEditable.propTypes = {
  markdown: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
  inputFilters: PropTypes.array,
  outputFilters: PropTypes.array,
  style: PropTypes.object,
  raw: PropTypes.bool,
};

export default MarkdownHtmlEditable;
