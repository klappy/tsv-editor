import React, {useState} from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import MUIDataTable from 'mui-datatables';
import { createMuiTheme, MuiThemeProvider } from '@material-ui/core/styles';

import Cell from './Cell';
import CustomToolbar from './CustomToolbar';

const TableComponent = ({
  classes,
  setFile,
  file,
  file: {
    title,
    columns,
    data,
  },
}) => {
  const [rowsPerPage, setRowsPerPage] = useState(25);

  let columnConfig;
  if (columns) {
    columnConfig = columns.map(name => ({
      name,
      options: {
        customBodyRender: (value, tableMeta, updateValue) => (
          <Cell value={value} tableMeta={tableMeta} file={file} setFile={setFile} />
        ),
      }
    }));
  }

  const options = {
    // responsive: 'scroll',
    // fixedHeader: true,
    print: false,
    resizableColumns: true,
    selectableRows: false,
    rowsPerPage: rowsPerPage,
    rowsPerPageOptions: [25, 50, 100],
    onChangeRowsPerPage: (numberOfRows) => {
      setRowsPerPage(numberOfRows);
    },
    download: false,
    customToolbar: () => ( <CustomToolbar file={file} /> ),
  };

  return (
    <div className={classes.root}>
      <MuiThemeProvider theme={getMuiTheme()}>
        <MUIDataTable
          title={title}
          data={data}
          columns={columnConfig}
          options={options}
        />
      </MuiThemeProvider>
    </div>
  );
};

TableComponent.propTypes = {
  classes: PropTypes.object.isRequired,
  file: PropTypes.object.isRequired,
  setFile: PropTypes.func.isRequired,
};

const styles = theme => ({
  root: {
    padding: '1em',
  },
});

const getMuiTheme = () => createMuiTheme({
  typography: {
    useNextVariants: true,
  },
  overrides: {
    MuiTableCell: {
      root: {
        padding: "0 8px 0 8px",
        textAlign: "unset",
      },
    },
    MuiTableRow: {
      root: {
        height: 'unset',
      }
    },
    MUIDataTable: {
      responsiveScroll: {
        maxHeight: 'unset',
      },
    },
    MUIDataTableBodyCell: {
      root: {
        maxWidth: "33%",
      },
    },
  }
});

export default withStyles(styles)(TableComponent);
