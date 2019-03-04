import React, {
  useState,
  useContext,
  Suspense,
  lazy,
} from 'react';
import { withStyles } from '@material-ui/core/styles';
import {
  CircularProgress,
} from '@material-ui/core';

import CustomToolbar from './CustomToolbar';

import { FileContext } from '../File.context';
import { RawContextProvider } from './Raw.context';

const TableComponent = lazy(() => Promise.resolve().then(() => require('./Component')));

const TableContainer = ({classes}) => {
  const [rowsPerPage, setRowsPerPage] = useState(25);
  const {file} = useContext(FileContext);

  const options = {
    responsive: 'scroll',
    // fixedHeader: true,
    print: false,
    resizableColumns: false,
    selectableRows: false,
    rowsPerPage: rowsPerPage,
    rowsPerPageOptions: [25, 50, 100],
    onChangeRowsPerPage: (numberOfRows) => {
      setRowsPerPage(numberOfRows);
    },
    download: false,
    customToolbar: () => ( <CustomToolbar /> ),
  };

  const loadingComponent = (
    <CircularProgress className={classes.progress} color="primary" disableShrink />
  );

  const tableComponent = (
    <RawContextProvider>
      <Suspense fallback={loadingComponent}>
        <TableComponent
          file={file}
          options={options}
        />
      </Suspense>
    </RawContextProvider>
  );

  let component = <div />;
  if (Object.keys(file).length > 0) {
    component = tableComponent;
  }

  return component;
};

const styles = theme => ({
  root: {
    width: '100%',
  },
  progress: {
    margin: 'auto',
    display: 'block',
  },
});

export default withStyles(styles)(TableContainer);
