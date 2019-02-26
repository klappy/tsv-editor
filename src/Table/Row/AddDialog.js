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
  const {file, addRow, generateNewRow} = useContext(FileContext);
  const [open, setOpen] = React.useState(false);
  const [newRow, setNewRow] = React.useState();

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
        <DialogTitle id="alert-dialog-title">
          Add row below previous?
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            Columns with 50%+ unique values will not be duplicated.
          </DialogContentText>
          <Divider />
          <br/>
          {
            file.columns.map((name, i) => {
              let text = '';
              if (!newRow) {
                const _newRow = generateNewRow({row});
                setNewRow(_newRow);
                return text;
              } else {
                text = (
                  <DialogContentText key={name + i}>
                  <strong>{name}:</strong>
                  { " " + newRow[i]}
                  </DialogContentText>
                );
              }
              return text;
            })
          }
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary" autoFocus>
            Cancel
          </Button>
          <Button
            onClick={() => {
              addRow({rowIndex, newRow});
              handleClose();
            }}
            color="secondary"
          >
            Add
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

export default RowDelete;
