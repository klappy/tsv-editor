import React, {useState} from 'react';
import fileDownload from 'js-file-download';

import * as FileHelpers from './FileOpen/helpers';

// File context
export const FileContext = React.createContext();

export function FileContextProvider({children}) {
  const [file, setFile] = useState({});

  const addRow = ({rowIndex, newRow}) => {
    let data = file.data.slice(0);
    let _data = [...data];
    // by request add row after index
    _data.splice(rowIndex + 1, 0, newRow);
    const _file = {...file, data: _data};
    setFile(_file);
  };

  function generateNewRow({row}) {
    let dataIndex = {};
    let lengthIndex = {};
    file.data.forEach(_row => {
      _row.forEach((value, index) => {
        const column = file.columns[index];
        if (!dataIndex[column]) dataIndex[column] = {};
        if (!dataIndex[column][value]) dataIndex[column][value] = 0;
        dataIndex[column][value] ++;
        const valueLength = value.length;
        if (!lengthIndex[column]) lengthIndex[column] = {};
        if (!lengthIndex[column][valueLength]) lengthIndex[column][valueLength] = 0;
        lengthIndex[column][valueLength] ++;
      });
    });
    const rowCount = file.data.length;
    let newRow = row.map((value, index) => {
      const column = file.columns[index];
      const values = Object.keys(dataIndex[column]).length;
      const valuesRatio = values / rowCount;
      const duplicateValue = (valuesRatio < 0.5);

      const valuesLengths = Object.keys(lengthIndex[column]);
      const valuesLengthsLength = valuesLengths.length;
      const needRandomId = (valuesRatio > 0.99 && valuesLengthsLength <= 2);

      let newValue = '';
      if (duplicateValue) {
        newValue = value;
      } else if (needRandomId) {
        const {length} = value;
        newValue = randomId({length});
      }
      return newValue;
    });
    return newRow;
  };

  const randomId = ({length}) => {
    const number = Math.random() // 0.9394456857981651
    // number.toString(36); // '0.xtis06h6'
    if (length > 9) length = 9;
    const id = number.toString(36).substr(2, length); // 'xtis06h6'
    return id;
  };

  const deleteRow = ({rowIndex}) => {
    let data = file.data.slice(0);
    data.splice(rowIndex, 1);
    const _file = {...file, data};
    setFile(_file);
  };

  const editCell = ({ rowIndex, columnIndex, value}) => {
    let data = file.data.slice(0);
    // added action first column means we shift index
    data[rowIndex][columnIndex - 1] = value;
    const _file = {...file, data};
    setFile(_file);
  };

  const downloadFile = () => {
    if (file.columns && file.data) {
      let rows = [...file.data];
      rows.unshift(file.columns);
      const tsv = FileHelpers.tsvGenerate(rows);
      fileDownload(tsv, file.title);
    }
  };

  const value = {
    file,
    setFile,
    addRow,
    deleteRow,
    editCell,
    downloadFile,
    generateNewRow,
  };

  return (
    <FileContext.Provider value={value}>
      {children}
    </FileContext.Provider>
  );
};

export const FileContextConsumer = FileContext.Consumer;
