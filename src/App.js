import React, {useState} from 'react';
import './App.css';

import ApplicationBar from './ApplicationBar';
import Table from './Table';
import FileOpen from './FileOpen';

const App = () => {
  const [file, setFile] = useState({});
  return (
    <div className="App">
      <ApplicationBar file={file} setFile={setFile} />
      <Table title={file.title} columns={file.columns} data={file.data} />
    </div>
  );
};

export default App;
