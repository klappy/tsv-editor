import React, {useContext} from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';

import { BlockEditable } from 'markdown-translatable';

import { FileContext } from '../File.context';
import { RawContext } from './Raw.context';

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
  const {raw} = useContext(RawContext);

  let style = { padding: '0.5em', };

  return (
    <BlockEditable
      style={style}
      raw={raw}
      markdown={value}
      inputFilters={[[/<br>/gi, '\n']]}
      outputFilters={[[/\n/gi, '<br>']]}
      onEdit={(markdown) => {
        debugger
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
