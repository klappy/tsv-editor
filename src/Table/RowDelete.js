import React from 'react';
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from '@material-ui/core';

function RowDelete({
  rowIndex,
  columns,
  row,
  rowAction,
  clickableComponent,
}) {
  const [open, setOpen] = React.useState(false);

  function handleClickOpen() {
    setOpen(true);
  }

  function handleClose() {
    setOpen(false);
  }

  function handleAction() {
    rowAction({rowIndex});
    setOpen(false);
  }

  const rowComponent = columns.map((name, i) => (
    <DialogContentText key={name + i}>
      <strong>{name}:</strong>
      { " " + row[i]}
    </DialogContentText>
  ));

  return (
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
          {rowComponent}
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary" autoFocus>
            Cancel
          </Button>
          <Button onClick={handleAction} color="secondary">
            Delete
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

export default RowDelete;
