import React from 'react';




class Map extends React.Component
{
    constructor()
    {
        super();
        this.state = 
        {
            users: [
                {
                    id:1,
                    name: "Hung",
                    age: 23
                },
                {
                    id: 2,
                    name: "Phuc",
                    age: 24
                },
                {
                    id:3,
                    name: "Chu",
                    age:25
                }
            ],
            num : 1
        };
    }

    // function Change Item
    changeItem = (event)=>{
        let key = 2;
        this.setState(
            prevState => 
            ({
                users: prevState.users.map(
                    // item.id === key, nếu item.id bằng 
                    // với key thì tiến hành cập nhật nội dung,
                    // không thì trả về item.
                    item => item.id === key ? {
                        ...item,
                        name: "Han",
                        age: 26
                    }: item
                )
              }
            )
        )
    };

    //  render sẽ có return ();
    render()
    {
         return(
            <div >
                <ul>
                {
                    this.state.users.map(item =>
                     <li key={item.id} >
                         <h2>Name: {item.name}</h2>
                         <p>age: {item.age}</p>
                     </li> 
                    )
                }
                </ul>
             
                <button type="button" onClick={this.changeItem}>Change Item</button>
            </div>

         )
    };
}


export default Map;