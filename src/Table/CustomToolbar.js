import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import {
  IconButton,
  Tooltip,
} from '@material-ui/core';
import {
  CloudDownload,
} from '@material-ui/icons';


import { FileContextConsumer } from '../File.context';

function CustomToolbar({
  classes
}) {

  return (
    <FileContextConsumer>
      {({ downloadFile }) => (
        <React.Fragment>
          <Tooltip title="Download TSV">
            <IconButton className={classes.iconButton} onClick={downloadFile}>
              <CloudDownload />
            </IconButton>
          </Tooltip>
        </React.Fragment>
      )}
    </FileContextConsumer>
  );
}


const styles = {
  iconButton: {}
};

export default withStyles(styles, { name: "CustomToolbar" })(
  CustomToolbar
);
