import React from 'react';


class Form extends React.Component{
    constructor(props)
    {
        super(props);
        this.state = 
        { 
            text: "",
            age:  "" 
        };
    }

   handleChangeName = (event) => {
       this.setState({text : event.target.value});
   }

   handleChangeAge = (event) => {
    this.setState({age: event.target.value});
}

   handleSubmit = ( event ) => {
       alert("Value of submission text : " + this.state.text + " Value of submission age: " + this.state.age);
       event.preventDefault();
   }

   render() {

    return(
        
        <form onSubmit={this.handleSubmit}>
            <label>
                Name: <input type="text" value={this.state.text} onChange={this.handleChangeName} />
                </label>
                <br/>
                <label>
                Age: <input type="text" value={this.state.age} onChange={this.handleChangeAge} />
            </label>
            <br/>
            <input type="submit" value="Submit" />
        </form>
    );
   }
}

export default Form;