import React, {useContext} from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';

import * as helpers from './helpers';

import { FileContext } from '../File.context';

const Cell = ({
  classes,
  value,
  tableMeta,
  tableMeta: {
    columnIndex,
    rowIndex,
  },
}) => {
  const {editCell} = useContext(FileContext);

  return (
    <div
      dir="auto"
      contentEditable
      onBlur={(e)=>{
        const html = e.target.innerHTML;
        const value = helpers.htmlToMarkdown(html);
        editCell({rowIndex, columnIndex, value});
      }}
      dangerouslySetInnerHTML={{
        __html: helpers.markdownToHtml(value)
      }}
    />
  );
};

Cell.propTypes = {
  classes: PropTypes.object.isRequired,
};

const styles = theme => ({
});

export default withStyles(styles)(Cell);
