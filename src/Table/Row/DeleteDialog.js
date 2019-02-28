import React, {useContext} from 'react';
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Divider,
} from '@material-ui/core';

import { FileContext } from '../../File.context';

function RowDelete({
  row,
  rowIndex,
  menuClose,
  clickableComponent,
}) {
  const [open, setOpen] = React.useState(false);
  const {file, deleteRow} = useContext(FileContext);

  function handleClickOpen() {
    setOpen(true);
  }

  function handleClose() {
    menuClose();
    setOpen(false);
  }

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
            There is no undo feature, this is permanent.
          </DialogContentText>
          <Divider />
          <br/>
          {
            file.columns.map((name, i) => (
              <DialogContentText key={name + i}>
                <strong>{name}:</strong>
                <span>
                  {row[i]}
                </span>
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
  );
}

export default RowDelete;
