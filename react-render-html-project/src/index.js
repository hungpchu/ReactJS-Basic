import React from 'react';
import ReactDOM from 'react-dom';
// import nội dung file index.css
import './index.css';
// import nội dung file App.js
import App from './App';
// /src/serviceWorker.js, nội dung file này 
//được import trực tiếp bên trong /src/index.js 
//đóng vai trò như một Route điều hướng, liên kết các file.
import * as serviceWorker from './serviceWorker';
/***
 *   Nội dung trên about import có nghĩa là file /src/index.js lấy nội dung
 *  từ function App của file /src/App.js render ra nội dung
 *  trả về id="root" của file /public/index.html, 
 *  sau đó hiển thị nội dung này ra trình duyệt.
 */

 /***
  * About the function, render nội dung function App tới id="root"
  */
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
