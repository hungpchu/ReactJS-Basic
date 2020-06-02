import React from 'react';
import ReactDOM from 'react-dom';
import ClickH from './click.js'

const ActionButton = () => {
    const handleClick = () => {
       ReactDOM.render(<ClickH />, document.getElementById('hung'));
    }

    return(
        <button onClick={handleClick} >
            Click me
        </button>
    );
}

export default ActionButton;

