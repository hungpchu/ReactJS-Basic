import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Member from './App';
import * as serviceWorker from './serviceWorker';

// giới thiệu về truyền dữ liệu trong một component

/***
 * 1 way to truyển tham số member vào
 * <Member name="Hung Chu" age="24" /> se chuyen vao Member function tu App.js
 */
ReactDOM.render(
  <Member name="Hung Chu" age="24" />,
  document.getElementById('member')
);

var memberList = (
  <div>
    <h2>List: </h2>
    <Member name = "Hung Chu" age="24"/>
    <Member name="Joe Cole" age="12"/>
  </div>
);
/***
 * another cách để truyền memberList vào
 * memberList se chuyen vao Member function tu App.js
 */

ReactDOM.render(
  memberList,
  document.getElementById('list')
);

const info = {
  name: 'Hung Chu Object',
  age: '26'
}

ReactDOM.render(
  <Member name = {info.name} age={info.age} />,
  document.getElementById('object')
);


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
