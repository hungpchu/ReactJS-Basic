import React from 'react';
import logo from './logo.svg';
import './App.css';
import Member from './Member';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Member name="Hung Chu" age="24" />
      </header>
    </div>
  );
}

export default App;
