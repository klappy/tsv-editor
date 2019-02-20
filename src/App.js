import React, {useState} from 'react';
import './App.css';

import ApplicationBar from './ApplicationBar';
import Table from './Table';

const App = () => {
  const [file, setFile] = useState({});
  return (
    <div className="App">
      <ApplicationBar file={file} setFile={setFile} />
      <Table file={file} setFile={setFile} />
    </div>
  );
};

export default App;
