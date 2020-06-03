import React from 'react';


class Checkbox extends React.Component
{
    constructor()
    {
        super();
        // init this.state.isVN = false so that the checkbox is not checked
        // in the 1st place
        this.state = { isVN: false };
    }

    handleChange = (event) =>{
        // target la object tu event
        const target = event.target;
        // target.name = isVN
        // target.check = true
        //target.value = ON
        const value = target.name === 'isVN' ? target.checked : target.value;
        const name = target.name;
    
        // set this.state.isVN = true
        this.setState({
          [name]: value
        });
    }

    handleSubmit = (event) =>{
        alert("Gia tri cua isVN " + this.state.isVN );
    }

    render()
    {
        return(

            <form onSubmit={this.handleSubmit}>

                <label>
                    Nguoi Viet Nam:
                    {/* nếu không check thì lấy giá trị default là false
                     *Nếu check thì lấy true
                    */}
                    <input name="isVN" type="checkbox" checked={this.state.isVN} onChange={this.handleChange} />
                </label>
                <br/>
                    
            <input type="submit" value="Submit for checkbox" />

            </form>
        );
       
    }
}

export default Checkbox;