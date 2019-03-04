import React, {useContext} from 'react';
import { withStyles } from '@material-ui/core/styles';
import {
  Fab,
  Tooltip
} from '@material-ui/core';

import FileOpen from './FileOpen';

import { FileContext } from './File.context';

function Start({ classes }) {
  const {file} = useContext(FileContext);
  const title = 'Open local .tsv file';
  const startComponent = (
    <div className={classes.root}>
      <Tooltip title={title} aria-label="Add">
        <Fab color="primary" aria-label={title} className={classes.fab}>
          <FileOpen />
        </Fab>
      </Tooltip>
    </div>
  );
  let component = <div />;
  if (Object.keys(file).length === 0) {
    component = startComponent;
  }
  return component;
};

const styles = theme => ({
  root: {
    padding: '10em',
    textAlign: 'center',
  },
  fab: {
  },
});

export default withStyles(styles)(Start);
