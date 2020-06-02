import React from 'react';
import logo from './logo.svg';
import './App.css';

/***
 * Component avatar dành để xử lý hình ảnh member.
 */
function Avatar(){
  return (
   <div className="avatar">
     <img src={logo} alt="" />
   </div>
  );
}
/***
 * Component memberInfo dành để hiển thị thông tin member như tên, tuổi.
 */
function MemberInfo()
{
  return (
    <div className = "info">
      <h2>Hung Chu</h2>
      <p>Dep trai</p>
    </div>
  );
}
/***
 * Component comment dành để quản ý bình luận của member.
 */
function Comment(){
  return (
    <div className ="comment">
       Hung Chu la ng Viet Name
    </div>
  );
}

function Member()
{
  return (
    <div className="member">
    <Avatar />
    <MemberInfo />
    <Comment />
  </div>
  );
}

export default Member;
