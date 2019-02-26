import React, {useState} from 'react';

import TableComponent from './Component';
import CustomToolbar from './CustomToolbar';

import { FileContextConsumer } from '../File.context';

const TableContainer = () => {
  const [rowsPerPage, setRowsPerPage] = useState(25);

  const options = {
    responsive: 'scroll',
    // fixedHeader: true,
    print: false,
    // resizableColumns: true,
    selectableRows: false,
    rowsPerPage: rowsPerPage,
    rowsPerPageOptions: [25, 50, 100],
    onChangeRowsPerPage: (numberOfRows) => {
      setRowsPerPage(numberOfRows);
    },
    download: false,
    customToolbar: () => ( <CustomToolbar /> ),
  };

  return (
    <FileContextConsumer>
      {({ file }) => (
        <TableComponent
          file={file}
          options={options}
        />
      )}
    </FileContextConsumer>
  );
};

export default TableContainer;
