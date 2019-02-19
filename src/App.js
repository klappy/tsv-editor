import React, {useState} from 'react';
import './App.css';

import Table from './Table';
import FileOpen from './FileOpen';

const App = () => {
  const [file, setFile] = useState({});
  return (
    <div className="App">
      <Table title={file.title} columns={file.columns} data={file.data} />
      <FileOpen setFile={setFile.bind(this)} />
    </div>
  );
};

export default App;
