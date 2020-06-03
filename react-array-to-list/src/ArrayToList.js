import React from 'react';


function ArrayToList()
{
 const number = [1,2,3];
//  turn the array to list in html
 const list = number.map((number) => <li>{number * 2}</li>);
 return(
     <div>
        <p>The list of number * 2 is: </p>
        <ul>{list}</ul>
        <br/>
        <p>The list of number * 3 is: </p>
        {/* 
          * React.js nhúng map() vào JSX
          */}
        <ul>
        {number.map((number) => <li>{number*3}</li>)}
         </ul>
     </div>
 );
}

export default ArrayToList;