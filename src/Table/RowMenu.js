import React from 'react';
import {
  IconButton,
  Menu,
  MenuItem,
  ListItemIcon,
  Typography,
} from '@material-ui/core';
import {
  MoreVert,
  AddCircle,
  RemoveCircle,
} from '@material-ui/icons';

import RowDelete from './RowDelete';

import { FileContextConsumer } from '../File.context';

function RowMenu({
  rowIndex,
  columns,
  row,
}) {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);

  function handleClick(event) {
    setAnchorEl(event.currentTarget);
  }

  function handleClose() {
    setAnchorEl(null);
  }

  return (
    <FileContextConsumer>
    {({ file, setFile, addRow, deleteRow }) => (
      <div>
        <IconButton
          style={{padding: 0}}
          aria-label="Actions"
          aria-owns={open ? 'row-menu' : undefined}
          aria-haspopup="true"
          onClick={handleClick}
        >
          <MoreVert />
        </IconButton>
        <Menu
          id="row-menu"
          anchorEl={anchorEl}
          open={open}
          onClose={handleClose}
        >
          <MenuItem
            onClick={() => {
              addRow({rowIndex});
              handleClose();
            }}
          >
            <ListItemIcon>
              <AddCircle />
            </ListItemIcon>
            <Typography>
              Add Row
            </Typography>
          </MenuItem>
          <RowDelete
            rowIndex={rowIndex}
            columns={columns}
            row={row}
            rowAction={({rowIndex}) => {
              deleteRow({rowIndex});
              handleClose();
            }}
            clickableComponent={
              <MenuItem >
                <ListItemIcon>
                  <RemoveCircle />
                </ListItemIcon>
                <Typography>
                  Delete Row
                </Typography>
              </MenuItem>
            }
          />
        </Menu>
      </div>
    )}
    </FileContextConsumer>
  );
}

export default RowMenu;
