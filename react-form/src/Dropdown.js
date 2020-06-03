import React from 'react';

class Dropdown extends React.Component
{
    constructor()
    {
        super();
        this.state = {
            name: "Hung Chu",
            character: "dep trai"
        };
    }

    handleChange = (event) =>
    {
        this.setState({character: event.target.value});
    }

    handleSubmit = (event) =>
    {
        alert(this.state.name + " " + this.state.character);
    }

    render()
    {
        return (
            
            <form onSubmit={this.handleSubmit}>
                <label>
                    Select character for Hung Chu:
                    <select value={this.state.character} onChange={this.handleChange} >
                        <option value="Ngon zai">Ngon Zai</option>
                        <option value="Zai Zai">Zai Zai</option>
                        <option value="Cao to">Cao to</option>
                    </select>
                </label>
                <br/>
                <input type="submit" value="Submit for Dropdown"/>
            </form>
        );
    }
}

export default Dropdown;