import React from 'react';
import logo from './logo.svg';
import './App.css';

const member =
{
  text:"Hung Chu dep trai 45",
  info:{
    path: logo,
    name: 'Hung Chu',
    age: '24'
  }
}
// cách này truyền tham số mà không lồng function vào nhau
// function Avatar(props){
//   return (
//     <div className="avatar">
//       <img src={props.info.path} alt=""/>
//     </div>
//   );
// }

// function MemberInfo(props)
// {
//   return (
//     <div className="info">
//       {/* 
//        * props take infoObject base on here 
//        * <MemberInfo infoObject={member.info} />
//        */}
//       <p>{props.infoObject.name}</p>
//       <p>{props.infoObject.age}</p>
//     </div>
//   );
// }

// function Comment(props){
//   return(
//     <div className="comment">
//      {props.text} 
//     </div>
//   )
// };

// function Member()
// {
//   return (
//     <div className="member">
//       <Avatar info={member.info} />
//       <MemberInfo infoObject={member.info} />
//       <Comment text={member.text} />
//     </div>
//   );
// }

//  cách này truyền tham số mà  lồng function vào nhau
function Avatar(props){
  return(
    <div className="avatar">
      {/*
       * props sẽ lấy biến avatar object và lấy path 
       */}
      <img src={props.avatar.path} alt="" />
    </div>
  )
};

function MemberInfo(props){
  return(
    <div className="info">
      {/* 
       * avatar là tên biến truyền vào Avatar function
       */}
      <Avatar avatar={props.info} />
      <h2>{props.info.name}</h2>
      <p>Tuổi: {props.info.age}</p>
    </div>
  )
};

function Comment(props){
  return(
    <div className="comment">
      {props.text}
    </div>
  )
};

function Member(){
  return(
    <div className="member">
      {/* 
        * info là biến truyền vào MemberInfo function
        */}
      <MemberInfo info={member.info} />
      {/* 
        * text là biến truyền vào Comment function
        */}
      <Comment text={member.text} />
    </div>
  )
};


export default Member;
