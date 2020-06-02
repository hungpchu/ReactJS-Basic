import React from 'react';
import logo from './logo.svg';
import './App.css';
/***
 * File này liên kết với /puclic/index.html
 * thông qua /src/index.js:
 */ 

function App() {
  return (
    /***
     * đoạn code màu xanh bên trên chính là 
     * nội dung được hiển thị ngoài trình duyệt.
     */ 
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Hello Hung Chu. Please learn React</p>
      </header>
    </div>
  );
}

export default App;
