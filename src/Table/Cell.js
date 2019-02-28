import React, {useContext} from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';

import MarkdownHtmlEditable from '../components/MarkdownHtmlEditable';

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
    <MarkdownHtmlEditable
      style={{ padding: '0.5em' }}
      raw={false}
      markdown={value}
      inputFilters={[[/<br>/gi, '\n']]}
      outputFilters={[['\n', '<br>']]}
      handleChange={(markdown) => {
        editCell({rowIndex, columnIndex, value: markdown});
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
