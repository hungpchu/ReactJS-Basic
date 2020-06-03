import React from 'react';
const post = 
[
    {id:1, tittle: 'Hoc Gioi', content: 'Hay hoc'},
    {id:2, tittle: 'Cham lam', content: 'Hay choi'}
];


function ListAndKey()
{

    const sidebar = 
    (
        <ul>
          { post.map((post) =>
            <div key={post.id}>
                {post.tittle}
             </div>)}
        </ul>
    );

    const content = post.map((post) =>
       <div key={post.id} >
           <h2>{post.tittle}</h2>
           <p>{post.content}</p>
       </div>
    );

    return (
        <div>
            {sidebar}
            <hr/>
            {content}
        </div>
    );
}

export default ListAndKey;