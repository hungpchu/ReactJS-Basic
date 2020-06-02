import React from 'react';
import './App.css';

class Member extends React.Component {
    // cách 1: init the constructor
    // constructor(props){
    //     super(props);
    //     this.state = {
    //         name: "Hung Chu",
    //         age: "24"
    //     };
    // };

    // cách 2: chỉ khởi tạo state
    state = {
        name: "Hung Chu",
        age: "24",
        mood: "sad"
    };

    changeName = () => {
        this.setState(
            {
                mood:"happy"
            }
        )
    }

    render()
    {
        return(
            <element>
                 <div className="member">
                <p>State: </p>
                <p>Name: {this.state.name}</p>
                <p>Age: {this.state.age}</p>
                <p>Mood: {this.state.mood}</p>
            </div>
            <div className="change">
                <p>Change State for mood: </p>
                <p>Mood Change: {this.state.mood}</p>
                <button type="button" onClick={this.changeName}>Change Name</button>
            </div>
            </element>
          
        );
    }
}

export default Member;