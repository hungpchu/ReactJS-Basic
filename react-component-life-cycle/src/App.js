import React from 'react';
import logo from './logo.svg';
import './App.css';
// import CounterContinuous from './CounterContinuous.js';
import CounterAfter3 from './CounterAfter3Second';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        {/* <CounterContinuous /> */}
        <CounterAfter3 />
      </header>
    </div>
  );
}

export default App;
