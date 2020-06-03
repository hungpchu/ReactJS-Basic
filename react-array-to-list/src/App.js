import React from 'react';
import logo from './logo.svg';
import './App.css';
import ArrayToList from './ArrayToList';
import ListAndKey from './ListAndKey';

function App() {
  return (
    <div className="App">
      <body className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <ArrayToList />
        <br/>
        <ListAndKey />
      </body>
    </div>
  );
}

export default App;
