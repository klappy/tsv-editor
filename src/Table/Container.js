import React, {useState, useContext} from 'react';

import TableComponent from './Component';
import CustomToolbar from './CustomToolbar';

import { FileContext } from '../File.context';

const TableContainer = () => {
  const [rowsPerPage, setRowsPerPage] = useState(25);
  const {file} = useContext(FileContext);

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
    <TableComponent
      file={file}
      options={options}
    />
  );
};

export default TableContainer;
