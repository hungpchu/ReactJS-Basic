import React from 'react';
import './App.css';


class Member extends React.Component {
    render()
    {
        return (
            <div className="member">
                <h2>{this.props.name}</h2>
                <p>{this.props.age}</p>
            </div>
        );
    }
}

export default Member;