import React from 'react';
import './App.js';

class CounterAfter3 extends React.Component{
    constructor(props)
    {
        super(props);
        this.state = { count: 0};
    }

    countFunction = () => {
        this.interval = setInterval(() => {
           this.setState({count: this.state.count + 1}); 
        }, 1000);
    }

    componentDidMount() {
        this.countFunction();
        console.log("component did mount");
    }

    componentDidUpdate(){
        console.log("component did update");
        if ( this.state.count === 3){
            clearInterval(this.interval);
        }
    }

    componentWillUnmount()
    {
        console.log("component will unmount");
        // clearInterval(this.interval);
    }

    render(){
        console.log("In render, count = " + this.state.count);
        return (
            <div id="countAfter3">
                <p>Count after 3 second = {this.state.count}</p>
            </div>
                
        );
    }



}

export default CounterAfter3;