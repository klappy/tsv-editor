import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';

import * as helpers from './helpers';

const FileOpenComponent = ({
  classes,
  value,
  tableMeta,
  file,
  setFile,
}) => {
  const markdown = value.replace(/<br>/gi, '\n');
  return (
    <div
      dir="auto"
      contentEditable
      onBlur={(e)=>{
        const html = e.target.innerHTML;
        const _markdown = helpers.htmlToMarkdown(html);
        const {columnIndex, rowIndex} = tableMeta;
        let data = file.data.slice(0);
        data[rowIndex][columnIndex] = _markdown;
        const _file = {...file, data};
        setFile(_file);
      }}
      dangerouslySetInnerHTML={{
        __html: helpers.markdownToHtml(markdown)
      }}
    />
  );
};

FileOpenComponent.propTypes = {
  classes: PropTypes.object.isRequired,
  setFile: PropTypes.func.isRequired,
};

const styles = theme => ({
});

export default withStyles(styles)(FileOpenComponent);
