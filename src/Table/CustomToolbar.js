import React, {useContext} from 'react';
import { withStyles } from '@material-ui/core/styles';
import {
  IconButton,
  Tooltip,
} from '@material-ui/core';
import {
  CloudDownload,
  Code,
  LineStyle,
} from '@material-ui/icons';


import { FileContext } from '../File.context';
import { RawContext } from './Raw.context';

function CustomToolbar({
  classes,
}) {
  const {downloadFile} = useContext(FileContext);
  const {raw, toggleRaw} = useContext(RawContext);

  return (
    <React.Fragment>
      <Tooltip title="Toggle Preview/Raw">
        <IconButton className={classes.iconButton} onClick={toggleRaw}>
          { raw ? <Code /> : <LineStyle /> }
        </IconButton>
      </Tooltip>
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
