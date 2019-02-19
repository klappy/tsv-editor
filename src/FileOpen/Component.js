import React from 'react';
import PropTypes from 'prop-types';
import { FilePicker } from 'react-file-picker';
import { withStyles } from '@material-ui/core/styles';
import {
} from '@material-ui/core';
import {
  CloudUpload,
} from '@material-ui/icons';

import * as helpers from './helpers';

const FileOpenComponent = ({
  classes,
  setFile,
}) => {

  return (
    <FilePicker
      extensions={['tsv']}
      onChange={ async (fileObject) => {
        const file = await helpers.handleTsvFileObject(fileObject);
        setFile(file);
      }}
      onError={errMsg => {
        alert(errMsg);
      }}
    >
      <CloudUpload />
    </FilePicker>
  );
};

FileOpenComponent.propTypes = {
  classes: PropTypes.object.isRequired,
  setFile: PropTypes.func.isRequired,
};

const styles = theme => ({
  fab: {
    margin: theme.spacing.unit,
  },
});

export default withStyles(styles)(FileOpenComponent);
