import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import MUIDataTable from 'mui-datatables';
import { createMuiTheme, MuiThemeProvider } from '@material-ui/core/styles';

import Cell from './Cell';
import RowMenu from './RowMenu';

const TableComponent = ({
  classes,
  file,
  file: {
    title,
    columns,
    data,
  },
  options,
}) => {
  let columnConfig, dataRows;
  if (columns && data) {
    console.log(data.length)
    columnConfig = columns.map(name => ({
      name,
      options: {
        customBodyRender: (value, tableMeta, updateValue) => (
          <Cell value={value} tableMeta={tableMeta} />
        ),
      }
    }));
    const actionsColumn = {
      name: '',
      options: {
        sort: false,
        filter: false,
      },
    };
    columnConfig.unshift(actionsColumn);
    dataRows = data.map((row, rowIndex) => {
      const actionsData = (
        <RowMenu rowIndex={rowIndex} columns={columns} row={row} />
      );
      let _row = [actionsData, ...row];
      return _row;
    });
  }

  return (
    <div className={classes.root}>
      <MuiThemeProvider theme={getMuiTheme()}>
        <MUIDataTable
          title={title}
          data={dataRows}
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
