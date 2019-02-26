import React from 'react';
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from '@material-ui/core';

import { FileContextConsumer } from '../../File.context';

function RowDelete({
  row,
  rowIndex,
  menuClose,
  clickableComponent,
}) {
  const [open, setOpen] = React.useState(false);

  function handleClickOpen() {
    setOpen(true);
  }

  function handleClose() {
    menuClose();
    setOpen(false);
  }

  return (
    <FileContextConsumer>
      {({ file, deleteRow }) => (
        <div>
          <div onClick={handleClickOpen}>
            {clickableComponent}
          </div>
          <Dialog
            open={open}
            onClose={handleClose}
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description"
          >
            <DialogTitle id="alert-dialog-title">{"Delete this row?"}</DialogTitle>
            <DialogContent>
              <DialogContentText id="alert-dialog-description">
                Deleting this row is permanent. You will have to access the file that was imported to recover this data.
              </DialogContentText>
              {
                file.columns.map((name, i) => (
                  <DialogContentText key={name + i}>
                    <strong>{name}:</strong>
                    { " " + row[i]}
                  </DialogContentText>
                ))
              }
            </DialogContent>
            <DialogActions>
              <Button onClick={handleClose} color="primary" autoFocus>
                Cancel
              </Button>
              <Button
                onClick={() => {
                  deleteRow({rowIndex});
                  handleClose();
                }}
                color="secondary"
              >
                Delete
              </Button>
            </DialogActions>
          </Dialog>
        </div>
      )}
    </FileContextConsumer>
  );
}

export default RowDelete;
