import React from 'react';
import './App.css';

var arrowMem = (props) =>
{
  console.log("hung");
  return (
    <div className="arrow">
      <p>{props.name}</p>
      <p>{props.age}</p>
    </div>
  );

}

export default arrowMem;