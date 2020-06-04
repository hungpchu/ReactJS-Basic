import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';


// fall back
// with this approach, each Square component 
// maintains the game’s state. To check for a winner, 
// we’ll maintain the value of each of the 9 squares in one location.
// When the Board’s state changes, the Square components re-render automatically. 
class Square extends React.Component
{
    constructor(props){
        super(props);
        this.state = {
            value: null,
        };
    }


    changeToUserInput = () => {
        this.setState({value: 'X'});
        console.log("state = " + this.state.value);
    }

    render()
    {
        console.log("render");
        return (
                <button className="square" onClick={this.changeToUserInput}>{this.state.value}</button>
        );
    }
}


class Board extends React.Component
{
    renderSquare(){
        return <Square  />;
    }

    render(){
        const title = "Next Player: X";
        return(
            <div>
                <div className="">{title}</div>
                <div className="board-row">
                   {this.renderSquare()}
                   {this.renderSquare()}
                   {this.renderSquare()}
                </div>
                <div className="board-row">
                   {this.renderSquare()}
                   {this.renderSquare()}
                   {this.renderSquare()}
                </div>
                <div className="board-row">
                   {this.renderSquare()}
                   {this.renderSquare()}
                   {this.renderSquare()}
                </div>
            </div>
        );
    }
}

class Game extends React.Component
{
    render()
    {
        return(
            <div className = "game">
                <div className = "game-board">
                    <Board />
                </div>
                <div className="game-info"></div>
            </div>
        );
    }
}

ReactDOM.render(
    <Game />,
    document.getElementById('root')
);