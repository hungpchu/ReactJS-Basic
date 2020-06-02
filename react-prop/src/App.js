import React from 'react';
// import logo from './logo.svg';
import './App.css';

/***
 * component Member ta đã sử dụng props
 * nơi nào xuất hiện props thì nơi đó sẽ được 
 * liên kết với các biến (name, age), 
 * khi render thì các tham số (Hung Chu, 24) 
 */
function Member(props) {
    return(
      <div className="member">
        <h2>{ props.name }</h2>
        <p>Tuổi: { props.age }</p>
      </div>
    );
 
}
export default Member;
