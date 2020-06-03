import React from 'react';
import logo from './logo.svg';
import './App.css';
import Form from './Form.js';
import Dropdown from './Dropdown';
import Checkbox from './Checkbox.js';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Form />
        <br/>
        <Dropdown />
        <br/>
        <Checkbox />
      </header>
    </div>
  );
}

export default App;
