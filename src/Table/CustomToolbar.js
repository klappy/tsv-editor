import React, {useContext} from 'react';
import { withStyles } from '@material-ui/core/styles';
import {
  IconButton,
  Tooltip,
} from '@material-ui/core';
import {
  CloudDownload,
} from '@material-ui/icons';


import { FileContext } from '../File.context';

function CustomToolbar({
  classes
}) {
  const {downloadFile} = useContext(FileContext);

  return (
    <React.Fragment>
      <Tooltip title="Download TSV">
        <IconButton className={classes.iconButton} onClick={downloadFile}>
          <CloudDownload />
        </IconButton>
      </Tooltip>
    </React.Fragment>
  );
}


const styles = {
  iconButton: {}
};

export default withStyles(styles, { name: "CustomToolbar" })(
  CustomToolbar
);
