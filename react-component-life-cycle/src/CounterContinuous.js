import React from 'react';
import './App.js';


class CounterContinuous extends React.Component{
    constructor(props){
        super(props);
        this.state = { count: 1};
    };

    countFuction = () => {
        this.setState({
            count:this.state.count + 1
        });
    }

    componentDidMount(){
        setInterval(() => this.countFuction(),1000);
        console.log("component did mount")
    }

    render(){
        console.log("in render, count  = " + this.state.count);
        return(
                <h2>Count continuous = {this.state.count}</h2>
        );
    };
    
}

export default CounterContinuous;