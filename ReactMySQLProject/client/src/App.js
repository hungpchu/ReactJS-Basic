import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
// thư viện axios =  để xử lý các thao tác 
// HTTP REQUEST như các phương thức GET, POST, DELETE
import axios from 'axios';

class App extends Component {
  state = {
    message: ''
  };

  componentDidMount() {
    // thư viện Axios lấy dữ liệu từ server app.js
    axios.get('/api/test')
         .then(result => this.setState({ message: result.data.message }))
  };

  render() {
    return(
      <div className="App">
        <header className="App-header">
          <h1>{ this.state.message }</h1>
          <img src={logo} className="App-logo" alt="logo" />
        </header>
      </div>
    )
  };
};

export default App;