import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import logo from './logo.svg';
import App from './App';
import MemberRender from './Render';
import ArrowMem from './arrowFunction'
import * as serviceWorker from './serviceWorker';



ReactDOM.render(
  <ArrowMem name="arrow Function Name" age="arrow Function age" />,
  document.getElementById('arrow')
);

ReactDOM.render(
    <App />,
  document.getElementById('member')
);

const render ={
  text:"xu ly tai render",
  info:{
    path: logo,
    name: 'Hung Chu render',
    age: '24'
  }
}


// Xử lý dữ liệu tại phần render
ReactDOM.render(
  <MemberRender
     // truyền biến info vào cho function MemberRender trong Render.js
     info = {render.info}
     // truyền biến text vào cho function MemberRender trong Render.js
     text = {render.text}
   />,
   document.getElementById('render')
)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
