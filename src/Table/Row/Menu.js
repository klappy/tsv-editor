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

import AddDialog from './AddDialog';
import DeleteDialog from './DeleteDialog';

function RowMenu({
  rowIndex,
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
        <AddDialog
          row={row}
          rowIndex={rowIndex}
          menuClose={handleClose}
          clickableComponent={
            <MenuItem >
              <ListItemIcon>
                <AddCircle />
              </ListItemIcon>
              <Typography>
                Add Row
              </Typography>
            </MenuItem>
          }
        />
        <DeleteDialog
          row={row}
          rowIndex={rowIndex}
          menuClose={handleClose}
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
  );
}

export default RowMenu;
