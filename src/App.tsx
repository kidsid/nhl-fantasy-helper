import React from 'react';
import './App.css';
import config from './config.json';
import Header from './components/Header/Header';

function App() {
  return (
    <div className="App">
      <Header items={config.Header.Items} />
    </div>
  );
}

export default App;
