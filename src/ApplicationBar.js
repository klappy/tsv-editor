import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import {
  AppBar,
  Toolbar,
  Typography,
  IconButton,
} from '@material-ui/core';

import FileOpen from './FileOpen';

const ApplicationBar = ({
  classes,
  file,
  setFile,
}) => {
  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar variant="dense">
          <IconButton className={classes.menuButton} color="inherit" aria-label="Open">
            <FileOpen setFile={setFile} />
          </IconButton>
          <Typography variant="h6" color="inherit">
            {file.title}
          </Typography>
        </Toolbar>
      </AppBar>
    </div>
  );
};

ApplicationBar.propTypes = {
  classes: PropTypes.object.isRequired,
  file: PropTypes.object.isRequired,
  setFile: PropTypes.func.isRequired,
};

const styles = {
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginLeft: -18,
    marginRight: 10,
  },
};

export default withStyles(styles)(ApplicationBar);
