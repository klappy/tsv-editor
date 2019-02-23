import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';

import * as helpers from './helpers';

import { FileContextConsumer } from '../File.context';

const Cell = ({
  classes,
  value,
  tableMeta,
  tableMeta: {
    columnIndex,
    rowIndex,
  },
}) => {
  const markdown = value.replace(/<br>/gi, '\n');
  return (
    <FileContextConsumer>
      {({ editCell }) => (
        <div
          dir="auto"
          contentEditable
          onBlur={(e)=>{
            const html = e.target.innerHTML;
            const value = helpers.htmlToMarkdown(html);
            editCell({rowIndex, columnIndex, value});
          }}
          dangerouslySetInnerHTML={{
            __html: helpers.markdownToHtml(markdown)
          }}
        />
      )}
    </FileContextConsumer>
  );
};

Cell.propTypes = {
  classes: PropTypes.object.isRequired,
};

const styles = theme => ({
});

export default withStyles(styles)(Cell);
