import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import fileDownload from 'js-file-download';
import {
  IconButton,
  Tooltip,
} from '@material-ui/core';
import {
  CloudDownload,
} from '@material-ui/icons';

import * as FileHelpers from '../FileOpen/helpers';

class CustomToolbar extends React.Component {

  handleDownload = () => {
    const {file} = this.props;
    if (file.columns && file.data) {
      let rows = [...file.data];
      rows.unshift(file.columns);
      const tsv = FileHelpers.tsvGenerate(rows);
      fileDownload(tsv, file.title);
    }
  };

  render() {
    const { classes } = this.props;

    return (
      <React.Fragment>
        <Tooltip title="Download TSV">
          <IconButton className={classes.iconButton} onClick={this.handleDownload}>
            <CloudDownload />
          </IconButton>
        </Tooltip>
      </React.Fragment>
    );
  }
};

const styles = {
  iconButton: {}
};

export default withStyles(styles, { name: "CustomToolbar" })(
  CustomToolbar
);
